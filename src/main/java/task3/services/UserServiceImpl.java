package task3.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import task3.dao.UsersDAO;
import task3.dao.UsersDAOImpl;
import task3.model.User;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private UsersDAO usersDAO;

    @Autowired
    public void setUsersDAO(UsersDAO usersDAO) {
        this.usersDAO = usersDAO;
    }

    @Transactional
    @Override
    public List<User> allUsers() {
        return usersDAO.allUsers();
    }

    @Override
    public void add(User user) {
        usersDAO.add(user);
    }

    @Override
    public void delete(User user) {
        usersDAO.delete(user);
    }

    @Override
    public void edit(User user) {
        usersDAO.edit(user);
    }

    @Override
    public User getById(int id) {
        return usersDAO.getById(id);
    }
}
