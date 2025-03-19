package com.tastygo.express.TastyGo.io;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserRequest
{
    private String name;
    private String password;
    private String email;
}
