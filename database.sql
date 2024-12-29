-- db name react-to-do

CREATE TABLE "todos" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(24),
  "priority" INT,
  "created" DATE,
  "completed" DATE default null
);

INSERT INTO "todos" 
("name", "priority", "created")
VALUES
('test2', 3, NOW() );
  
 SELECT * FROM "todos" ORDER BY id ASC;
 
 DELETE FROM "todos" WHERE id=2;
 
 UPDATE "todos" SET completed=NOW() WHERE id=12;