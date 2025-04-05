package com.tastygo.express.TastyGo.io;

import com.tastygo.express.TastyGo.service.ContactUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactUsServiceImpl implements ContactUsService {

    @Autowired
    private JavaMailSender mailSender;

    @Override
    public void sendEmail(ContactUsRequest request) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(request.getRecipient());
        message.setSubject(request.getSubject());
        message.setText(request.getBody());

        mailSender.send(message);
    }
}
