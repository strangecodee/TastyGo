package com.tastygo.express.TastyGo.service;

import com.tastygo.express.TastyGo.io.ContactUsRequest;

public interface ContactUsService {
    public void sendEmail(ContactUsRequest request);
}
