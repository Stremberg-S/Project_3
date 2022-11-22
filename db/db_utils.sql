--  select --
select * from auditing_form;
select * from auditing_logs;
select * from inspection;
select * from object;
select * from requirement;
select * from requirement_result;
select * from target_group;
select * from user
where password = '206a4cf2270c052aacd293693b26a53586b327b5';
-- ----------------------------------


-- table description --
desc user;
-- --------------------


-- clear 'some' table
DELETE FROM user WHERE 1 + 1;
-- 

ALTER DATABASE project_3 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


-- drop drop ---------------------------------------------------------------------------
-- -------------------------------------------------------------------------------------
 drop schema project_3;
-- -------------------------------------------------------------------------------------