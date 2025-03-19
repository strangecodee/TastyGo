package com.tastygo.express.TastyGo.repository;

import com.tastygo.express.TastyGo.entity.FoodEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends MongoRepository<FoodEntity, String>
{

}
