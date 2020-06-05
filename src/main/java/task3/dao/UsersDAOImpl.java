package task3.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import task3.model.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

@Transactional
@Repository
public class UsersDAOImpl implements UsersDAO {

    private static final AtomicInteger AUTO_ID = new AtomicInteger(0);
    /*private static Map<Integer, User> users = new HashMap<>();

    static {
        User user1 = new User("uname", "usurname", "umail@mail.com", "2001-02-02");
        user1.setId(AUTO_ID.getAndIncrement());
        users.put(user1.getId(), user1);
        User user2 = new User("uname1", "usurname1", "umail1@mail.com", "2002-02-02");
        user2.setId(AUTO_ID.getAndIncrement());
        users.put(user2.getId(), user2);
    }*/

    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public List<User> allUsers() {
        Session session = sessionFactory.getCurrentSession();
        return (List<User>) session.createQuery("from User").list();
    }


    @Override
    public int add(User user) {
        Session session = sessionFactory.getCurrentSession();
        session.persist(user);
        return user.getId();

    }

    @Override
    public void delete(User user) {
        Session session = sessionFactory.getCurrentSession();
        session.delete(user);
    }


    @Override
    public void edit(User user) {
        Session session = sessionFactory.getCurrentSession();
        session.update(user);
    }

    @Override
    public User getById(int id) {
        Session session = sessionFactory.getCurrentSession();
        return session.get(User.class, id);
    }
}
