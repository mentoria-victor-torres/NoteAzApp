package com.example.server;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class NoteEndpoint {

  private NoteRepo noteRepo;

  public NoteEndpoint(NoteRepo noteRepo) {
    this.noteRepo = noteRepo;
  }

  @GetMapping
  public List<Note> findAll() {
    return noteRepo.findAll();
  }

  @GetMapping("/{id}")
  public Note getById(@PathVariable("id") Long id) {
    return noteRepo.findById(id).orElse(null);
  }

  @PostMapping
  public Note save(@RequestBody Note note) {
    return noteRepo.save(note);
  }

  @PutMapping
  public Note update(@RequestBody Note note) {
    return noteRepo.save(note);
  }

  @DeleteMapping("/{id}")
  public void deleteById(@PathVariable("id") Long id) {
    noteRepo.deleteById(id);
  }
}
