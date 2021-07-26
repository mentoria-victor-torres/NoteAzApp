package com.example.server;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Note {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id", nullable = false)
  private Long id;

  private String title;

  @Column(length = 8000)
  private String content;

  private LocalDateTime createdAt;

  private Short urgency;

  private Short importance;
}
