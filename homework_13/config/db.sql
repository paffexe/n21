-- Active: 1745317920154@@127.0.0.1@3306@rent_stadium
CREATE DATABASE rent_stadium

SHOW DATABASES

SHOW TABLES

DROP TABLE users

DROP Table booking

CREATE TABLE `users`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `role` ENUM('owner', 'customer', 'admin') NOT NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255),
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(15) NOT NULL
);
CREATE TABLE `stadium`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `location` VARCHAR(50) NOT NULL,
    `description` TEXT,
    `price` DECIMAL(15, 2) NOT NULL,
    `owner_id` BIGINT NOT NULL
);
CREATE TABLE `booking`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `stadion_id` INT UNSIGNED NOT NULL,
    `user_id` INT UNSIGNED NOT NULL,
    `booking_date` DATE NOT NULL,
    `start_time` VARCHAR(10) NOT NULL,
    `end_time` VARCHAR(10) NOT NULL,
    `total_price` DECIMAL(15, 2) NOT NULL,
    `status` ENUM('PENDING', 'CANCELLED', 'CONFIRMED', 'PAID') NOT NULL 
);
CREATE TABLE `payment`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `booking_id` BIGINT  UNSIGNED NOT NULL,
    `amount` DECIMAL(15,2) NOT NULL,
    `payment_time` DATETIME NOT NULL,
    `payment_method` ENUM('CARD', 'CASH', 'ONLINE') NOT NULL 
);
CREATE TABLE `review`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `stadion_id` INT UNSIGNED NOT NULL,
    `user_id` INT UNSIGNED NOT NULL,
    `rating` SMALLINT NOT NULL,
    `comment` VARCHAR(255) NOT NULL
);
CREATE TABLE `images`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `stadion_id` INT UNSIGNED NOT NULL,
    `image_url` VARCHAR(255) NOT NULL
);

SHOW TABLES


INSERT INTO users (`role`, first_name, last_name, email, password, `phone`) VALUES
('owner', 'Ali', 'Karimov', 'ali.karimov@example.com', 'pass123Ali', '998901234567'),
('customer', 'Laylo', 'Yusupova', 'laylo.yusupova@example.com', 'pass456Lay', '998911234567'),
('admin', 'Jasur', 'Ismoilov', 'jasur.ismoilov@example.com', 'adminPass', '998931112233'),
('customer', 'Malika', 'Toshpulatova', 'malika.tosh@example.com', 'Malika2024!', '998901112233'),
('owner', 'Bobur', 'Rasulov', 'bobur.rasulov@example.com', 'Bobur@321', '998939876543'),
('admin', 'Dilnoza', 'Bekmurodova', 'dilnoza.bek@example.com', 'D!lnoza2024', '998998765432'),
('customer', 'Sardor', 'Nazarov', 'sardor.nazarov@example.com', 'sardor_456', '998977654321'),
('owner', 'Zilola', 'Shukurova', 'zilola.shukurova@example.com', 'zilolaPass1', '998901199887'),
('admin', 'Shahboz', 'Jalilov', 'shahboz.jalilov@example.com', 'shahbozPass', '998931100221'),
('customer', 'Nilufar', 'Soliyeva', 'nilufar.soliyeva@example.com', 'nilufar123', '998911100223');

INSERT INTO stadium (name, address, location, description, price, owner_id)
VALUES
('Camp Nou', 'Carrer d''Arístides Maillol, 12, Barcelona, Spain', 'Barcelona', 'Home stadium of FC Barcelona, one of the largest stadiums in Europe.', 75000, 1),
('Signal Iduna Park', 'Strobelallee 50, Dortmund, Germany', 'Dortmund', 'The largest stadium in Germany, famous for its Yellow Wall.', 60000, 3),
('Santiago Bernabéu', 'Av. de Concha Espina, 1, Madrid, Spain', 'Madrid', 'Home stadium of Real Madrid, undergoing massive renovation.', 90000, 4);

INSERT INTO booking (stadion_id, user_id, booking_date, start_time, end_time, total_price, status)
VALUES 
(1, 2, '2025-05-01', '09:00', '11:00', 150.00, 'CONFIRMED'),
(2, 3, '2025-05-02', '14:00', '16:00', 180.00, 'PENDING'),
(1, 4, '2025-05-03', '18:00', '20:00', 200.00, 'PAID');

INSERT INTO `payment` (`booking_id`, `amount`, `payment_time`, `payment_method`)
VALUES (2, 149.50, '2024-02-20 15:45:30', 'ONLINE');

INSERT INTO `review` (`stadion_id`, `user_id`, `rating`, `comment`)
VALUES (2, 102, 4, 'Good stadium overall, but the seats were a bit uncomfortable. The view was great though!');
SELECT * FROM images