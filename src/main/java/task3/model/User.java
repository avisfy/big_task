package task3.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "users", schema = "public")
public class User {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "email")
    private String email;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @Column(name = "birth")
    private Date birth;

    public User() {
        super();
    }

    public User(String name, String surname, String email, String birth) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.birth = Date.valueOf(birth);
    }


    public User(int id, String name, String surname, String email, String birth) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.birth = Date.valueOf(birth);
    }


    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setBirth(String birth) {
        this.birth = Date.valueOf(birth);
    }


    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getEmail() {
        return email;
    }

    public Date getBirth() {
        return birth;
    }


    @Override
    public String toString() {
        return id + " " + name + " " + surname + " " + email + " " + birth;
    }


}