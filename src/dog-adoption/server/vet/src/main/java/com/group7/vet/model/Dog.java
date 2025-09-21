package com.group7.vet.model;

import jakarta.persistence.*;

@Entity
public class Dog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use GenerationType.IDENTITY for auto-increment
    private Long id;
    private String name;
    private String breed;
    private Integer age;
    private Boolean isAdopted;
    private String imageUrl;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Boolean getIsAdopted() {
        return isAdopted;
    }

    public void setIsAdopted(Boolean adopted) {
        isAdopted = adopted;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Dog() {} // No-args constructor


    public Dog(String name, String breed, int age, boolean isAdopted, String imageUrl) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.isAdopted = isAdopted;
        this.imageUrl = imageUrl;
    }



}