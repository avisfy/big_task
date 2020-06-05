package task3.services;

import task3.model.User;

import java.util.List;

public interface UserService {
    List<User> allUsers();
    int add(User user);
    void delete(User user);
    void edit(User user);
    User getById(int id);
}
