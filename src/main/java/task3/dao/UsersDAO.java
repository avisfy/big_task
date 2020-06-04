package task3.dao;

import task3.model.User;

import java.util.List;

public interface UsersDAO {
    List<User> allUsers();
    void add(User user);
    void delete(User user);
    void edit(User user);
    User getById(int id);
}
