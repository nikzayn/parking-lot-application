# Parking lot application
- In this task, we have to create a parking lot application in which we have seggregated real world functionalities 
like pricing service, ticket service, parking service(parking lot + parking slots), user service etc.


## Overview
- System Requirements
- Design Thoughts
- Technologies Required
- API Usage


### System Requirements
- Docker
- Docker System


### Design Thoughts

#### Simple Thoughts
- Okay, so I am currently working on the pricing service, so what I am currently thinking is that I would first think how this system happens in
a current flow.
- Well, if a user comes to the parking lot and user unparks their respective vehicles from the parking slot, so they should have to pay the 
checkout price when they unparks their vehicle. 
- Once, they unparks the vehicle, the slot would become empty again.

#### Technical Thinking
- When a user, parks their vehicle at a particular slot, the number of hours will be start from the time it parks, so what I am thinking is that there would be a functionality where the pricing would be totally depended on the time of ticket creation.
- Once, the ticket is created, then that slot is booked for that vehicle, so we calculate the number of hours from the creationDate field.
- We can use moment library to calculate the no of hours, and also set the pricing limit for each hour. For example - if someone parked his/her vehicle for one hour he/she should have to pay (Rs. 10), but if time exceeds like just few minutes after an hour has been completed, he/she should have to pay (Rs. 20), 
so what I think there should be checkoutDate field from which the parking time could be easily calculated.
- When the user unparks their vehicle, the checkout price would be the difference between the checkoutDate and creationDate and it would multiply with the respective money (1hr = Rs.10), the total amount should reflect as checkout price.
- And last for the status, it should just describe the payment status, whether it is paid or not paid, totally depended on the user to pay the ticket price to the parking manager.


### Technologies Required
- Typescript
- NodeJS


### API Usage

| Endpoint                     | Result                                              | HTTP Methods
|------------------------------|-----------------------------------------------------|---------------------
| /status                      | Get the status of the pricing status                |      GET
|------------------------------|-----------------------------------------------------|---------------------
| /parking-pricing             |                |      POST
|------------------------------|-----------------------------------------------------|---------------------
| /list                        | Submit the email address to subscribe               |      POST
|------------------------------|-----------------------------------------------------|---------------------
| /list                        | Submit the email address to subscribe               |      POST