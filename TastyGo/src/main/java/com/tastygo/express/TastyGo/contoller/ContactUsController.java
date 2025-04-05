package com.tastygo.express.TastyGo.contoller;

import com.tastygo.express.TastyGo.io.ContactUsRequest;
import com.tastygo.express.TastyGo.service.ContactUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ContactUs")
public class ContactUsController
{
    @Autowired
    private ContactUsService contactUsService;

    @PostMapping("/send")
    public String sendEmail(@RequestBody ContactUsRequest request) {
        contactUsService.sendEmail(request);
        return "Email sent successfully!";
    }

}
