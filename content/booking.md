<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendar Booking</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f9f9f9;
        }
        .container {
            max-width: 800px;
            margin: auto;
        }
        h1 {
            text-align: center;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: center;
        }
        th {
            background-color: #4CAF50;
            color: white;
        }
        .booking-form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        input[type="text"], input[type="date"], input[type="submit"] {
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Calendar Booking</h1>
        
        <h2>Available Dates</h2>
        <table>
            <tr>
                <th>Date</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>2025-04-15</td>
                <td>Available</td>
            </tr>
            <tr>
                <td>2025-04-16</td>
                <td>Booked</td>
            </tr>
            <tr>
                <td>2025-04-17</td>
                <td>Available</td>
            </tr>
        </table>
        
        <h2>Book a Date</h2>
        <form class="booking-form" action="#" method="post">
            <label for="name">Your Name:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="date">Choose a Date:</label>
            <input type="date" id="date" name="date" required>
            
            <input type="submit" value="Book Now">
        </form>
    </div>
</body>
</html>
