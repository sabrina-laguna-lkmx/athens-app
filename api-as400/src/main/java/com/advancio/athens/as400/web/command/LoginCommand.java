package com.advancio.athens.as400.web.command;

import lombok.Data;

@Data
public class LoginCommand {
    
    private String email;

    private String password;
}
