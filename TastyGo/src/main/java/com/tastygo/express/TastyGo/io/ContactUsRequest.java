package com.tastygo.express.TastyGo.io;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ContactUsRequest {
    private String subject;
    private String body;
    private String recipient;

}
