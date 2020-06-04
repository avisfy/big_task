package task3.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import task3.model.User;
import task3.services.UserService;

import java.util.List;

@Controller
public class TaskController {
    private UserService userService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "/")
    @ResponseBody
    public String r() {
        String str = "";
        List<User> users = userService.allUsers();
        for(User user: users)  {
            str+=user + "\n";
        }
        //User u  = new User("uname", "usurname", "umail@mail.mm", "2000-02-02");
        //userService.add(u);
        return str;
    }

    @RequestMapping(value = "/gen_user", method = RequestMethod.GET)
    @ResponseBody
    public User genUser() {
        User u  = new User("uname", "usurname", "umail@mail.mm", "2000-02-02");
        u.setId(1);
        System.out.println(u.getBirth());
        return u;
    }

    @RequestMapping(value = "/save_user", method = RequestMethod.POST)
    public ResponseEntity saveUser(@RequestBody User u) {
        System.out.println("before saving:");
        userService.add(u);
        System.out.println("in saving:");

        List<User> users = userService.allUsers();
        for(User user: users)  {
            System.out.println(user);
        }
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @RequestMapping(value = "/load_grid", method = RequestMethod.GET)
    @ResponseBody
    public List<User> loadGrid() {
        return userService.allUsers();
    }
}
