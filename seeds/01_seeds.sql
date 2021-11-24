INSERT INTO users (name, email, password)
  VALUES ('Erik Kay', 'ek@123.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('John Smith', 'jsmith@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Tim McKey', 'cookies@creativeName.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Extra Built', 'extra@built.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Jason Turner', 'jasonT@outlook.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Terry Gross', 'terry@npr.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Rochelle Doo', 'RDoo@scoob.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u');

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code)
VALUES (1, 'Speed lamp', 'description', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 1200, 3, 4, 5, 'CANADA', '536 Namsub Highway', 'Sotboske', 'Quebec', '28142'),
(2, 'Blank corner', 'description', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 980, 4, 2, 7, 'CANADA', '651 Nami Road', 'Bohbatev', 'Alberta', '83680'),
(3, 'Habit mix', 'description', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg', 1800, 2, 5, 3, 'CANADA', '1650 Hejto Center', 'Genwezuj', 'Newfoundland And Labrador', '44583'),
(4, 'Headed know', 'description', 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg', 82640, 8, 5, 3, 'CANADA', '513 Powov Grove', 'Jaebvap', 'Ontario', '38051'),
(1, 'Port out', 'description', 'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg', 2358, 7, 4, 5, 'CANADA', '1392 Gaza Junction', 'Upetafpuv', 'Nova Scotia', '81059'),
(6, 'Shine twenty', 'description', 'https://images.pexels.com/photos/2076739/pexels-photo-2076739.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2076739/pexels-photo-2076739.jpeg', 13644, 1, 7, 8, 'CANADA', '340 Dokto Park', 'Upfufa', 'Alberta', '29045'),
(7, 'Game fill', 'description', 'https://images.pexels.com/photos/1756826/pexels-photo-1756826.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1756826/pexels-photo-1756826.jpeg', 23428, 5, 6, 4, 'CANADA', '834 Buwmi Road', 'Rotunif', 'Ontario', '564045');	

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
  VALUES ('2018-09-11', '2018-09-26' , 2, 3),
('2019-01-04', '2019-02-01', 2, 2),
('2021-10-01', '2021-10-14', 1, 4),
('2014-10-21', '2014-10-21', 3, 5),
('2016-07-17', '2016-08-01', 3, 4),
('2018-05-01', '2018-05-27', 4, 7),
('2022-10-04', '2022-10-23', 5, 1),
('2015-09-13', '2015-09-30', 6, 6),
('2023-05-27', '2023-05-28', 4, 2);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
  VALUES (2, 5, 1, 3, 'messages'),
(7, 1, 2, 4, 'messages'),
(3, 7, 3, 4, 'messages'),
(4, 2, 4, 5, 'messages'),
(4, 3, 5, 4, 'messages'),
(5, 6, 6, 5, 'messages');







