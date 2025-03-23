package com.tastygo.express.TastyGo.repository;

import com.tastygo.express.TastyGo.entity.OrderEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends MongoRepository<OrderEntity, String> {
    List<OrderEntity> findByUserId(String userId );
    Optional<OrderEntity> findByRazorpayOrderId(String razorpayOrderId);
}

