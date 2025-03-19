package com.tastygo.express.TastyGo.service;

import com.tastygo.express.TastyGo.entity.FoodEntity;
import com.tastygo.express.TastyGo.io.FoodRequest;
import com.tastygo.express.TastyGo.io.FoodResponse;
import com.tastygo.express.TastyGo.repository.FoodRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.DeleteObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectResponse;

import java.io.IOException;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class FoodServiceImpl implements FoodService
{
    @Autowired
    private S3Client s3Client ;

    @Autowired
    private FoodRepository foodRepository;

    @Value("${aws.s3.bucketname}")
    private String bucketName;

    @Override
    public String uploadFile(MultipartFile file) {
       String filenameExtension = file.getOriginalFilename()
               .substring(file.getOriginalFilename().lastIndexOf(".")+1);
       String key = UUID.randomUUID().toString()+"."+filenameExtension;
       try{
           PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                   .bucket(bucketName)
                   .key(key)
                   .acl("public-read")
                   .contentType(file.getContentType())
                   .build();

           PutObjectResponse response =  s3Client.putObject(putObjectRequest, RequestBody.fromBytes(file.getBytes()));

           if (response.sdkHttpResponse().isSuccessful()) {
               return "https://"+bucketName+".s3.amazonaws.com/"+key;   //here manually generate the Url

           }else{
               throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,"Failed to upload file" );

           }

       }
       catch(IOException ex){
           throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,"An error occurred while uploading file" );

       }
    }

    @Override
    public FoodResponse addFood(FoodRequest request, MultipartFile file) {
    FoodEntity newFoodEntity = convertToEntity(request);
    String imageUrl = uploadFile(file);
    newFoodEntity.setImageUrl(imageUrl);
    newFoodEntity= foodRepository.save(newFoodEntity);
    return convertToResponse(newFoodEntity);
    }

    @Override
    public List<FoodResponse> readFoods() {
        List<FoodEntity> databaseEntities = foodRepository.findAll();
        return databaseEntities.stream().map(object -> convertToResponse(object)).collect(Collectors.toList());
    }

    @Override
    public FoodResponse readFood(String id) {
        FoodEntity existingFood =foodRepository.findById(id).orElseThrow(() -> new RuntimeException("Food not found for id: " + id));
        return convertToResponse(existingFood);
    }

    @Override
    public boolean deleteFile(String filename) {
        DeleteObjectRequest deleteObjectRequest = DeleteObjectRequest.builder().
                bucket(bucketName)
                .key(filename)
                .build();
        s3Client.deleteObject(deleteObjectRequest);
    return true;
    }


    @Override
    public void deleteFood(String id) {
        FoodResponse response = readFood(id);
        String imageUrl = response.getImageUrl();
        String filename = imageUrl.substring(imageUrl.lastIndexOf("/")+1);
       boolean isFileDelete= deleteFile(filename);
       if(isFileDelete){
           foodRepository.deleteById(response.getId());
       }
    }


    private FoodEntity convertToEntity(FoodRequest request) {
       return FoodEntity.builder()
               .name(request.getName())
               .description(request.getDescription())
               .price(request.getPrice())
               .category(request.getCategory())
               .build();
    }

    private FoodResponse convertToResponse(FoodEntity entity) {
         return FoodResponse.builder()
                .id(entity.getId())
                .name(entity.getName())
                .description(entity.getDescription())
                .category(entity.getCategory())
                .price(entity.getPrice())
                 .imageUrl(entity.getImageUrl())
                .build();
    }
}
