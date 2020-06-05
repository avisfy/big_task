package task3.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
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
        String str = "started";
        return str;
    }


    @RequestMapping(value = "/gen_user", method = RequestMethod.GET)
    @ResponseBody
    public User genUser() {
        User u  = new User("uname", "usurname", "umail@mail.mm", "2000-02-02");
        u.setId(1);
        return u;
    }


    @RequestMapping(value = "/save_user", method = RequestMethod.POST)
    public ResponseEntity<Integer> saveUser(@RequestBody User u) {
        Integer newId = userService.add(u);
        return new ResponseEntity<>(newId, HttpStatus.OK);
    }


    @RequestMapping(value = "/load_grid", method = RequestMethod.GET)
    @ResponseBody
    public List<User> loadGrid() {
        return userService.allUsers();
    }


    @RequestMapping(value = "/delete_users", method = RequestMethod.POST)
    public ResponseEntity saveUser(@RequestBody List <Integer> deleteIds) {
        User user;
        for(Integer id: deleteIds) {
            user = userService.getById(id);
            userService.delete(user);
        }
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/edit_user", method = RequestMethod.POST)
    public ResponseEntity editUser(@RequestBody User editUser) {
        userService.edit(editUser);
        return new ResponseEntity(HttpStatus.OK);
    }
}
