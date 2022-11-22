-- user --
insert into user (name, login, password, admin)
	values 
 		('Admin_1','admin_1',SHA('1Admin1'), 1),
		('Admin_2','admin_2',SHA('1Admin2'), 1),
		('Admin_3','admin_3',SHA('1Admin3'), 1),
        ('Bill Gates','BillIsBest',SHA('1User1'), 0),
        ('Tim Cook','TeamApple',SHA('1Usert2'), 0),
        ('Elon Musk','TwitterFan',SHA('1User3'), 0),
        ('Michael Dell','WhyImHere',SHA('1User4'), 0),
        ('Sundar Pichai','EvilCorp', SHA('1User5'), 0);
       
       
 -- target_group --
 insert into target_group (description)
	values 
		('3D-Tulostimet'),
        ('Poytakoneet'),
        ('Kannettavat');
 
 
 -- object --
insert into object_to_check (user_login, target_group_id, name, description, location, type, model)
	values 
		('admin_1', 1, '3D-printer-3000 / 1', '', 'Varasto', '3D-tulostin', '3000-x1'),
        ('admin_1', 1, '3D-printer-3000 / 2', '', 'Varasto', '3D-tulostin', '3000-x1'),
        ('admin_2', 1, '3D-printer-3003 / 3', 'isokokoisille objekteille', 'Varasto', '3D-tulostin', '3003-x3'),
        ('admin_2', 1, '3D-printer-3003 / 4', 'isokokoisille objekteille', 'Varasto', '3D-tulostin', '3003-x3');
   

-- inspection --
insert into inspection (user_login, object_id, reason, observations, change_of_state)
	values 
		 ('admin_1', 1, 'ensimmainen tarkastus', 'ei huomattavaa', 0),
         ('admin_1', 2, 'ensimmainen tarkastus', 'ei huomattavaa', 0),
         ('admin_1', 3, 'ensimmainen tarkastus', 'ei huomattavaa', 0),
         ('admin_1', 4, 'ensimmainen tarkastus', 'ei huomattavaa', 0);