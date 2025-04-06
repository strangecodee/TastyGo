package com.tastygo.express.TastyGo.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "admins")
public class Admin {
    @Id
    private String id;
    private String email;
    private String password;


}
