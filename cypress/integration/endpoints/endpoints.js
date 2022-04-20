{/* <reference types="cypress" /> */}

//import UID from "../payloads/userSignUp.js"

function hash(){return Number.parseInt(Math.random() * 1000000)}
let UID = hash()

exports.endpoints =  {
    signUp: function(){
        return cy.request({
        method: 'POST',
        url: 'http://localhost:3001/users',
        failOnStatusCode: false,
        body: {
            "firstName": "generic",
            "lastName": "user",
            "username": `genUser${UID}`,
            "password": "s3cret",
            "confirmPassword": "s3cret"
        },
        headers: {
            "Accept":"application/json, text/plain, */*",
            "Accept-Language":"pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
            "Connection":"keep-alive",
            "Content-Type":"application/json",
            "Origin":"http://localhost:3000",
            "Referer":"http://localhost:3000/",
            "Sec-Fetch-Dest":"empty",
            "Sec-Fetch-Mode":"cors",
            "Sec-Fetch-Site":"same-site",
            "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
            //"sec-ch-ua":" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100",
            "sec-ch-ua-mobile":"?0",
            "sec-ch-ua-platform":"Windows"
            }
        })
    },
    login: function(un){
        return cy.request({
            method: 'POST',
            url: 'http://localhost:3001/login',
            failOnStatusCode: false,
            body: {
                "type":"LOGIN",
                "username":`${un}`,
                "password":"s3cret"
            },
            headers: {
                "Accept":"application/json, text/plain, */*",
                "Accept-Language":"pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                "Connection":"keep-alive",
                "Content-Type":"application/json",
                "Origin":"http://localhost:3000",
                "Referer":"http://localhost:3000/",
                "Sec-Fetch-Dest":"empty",
                "Sec-Fetch-Mode":"cors",
                "Sec-Fetch-Site":"same-site",
                "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
                "sec-ch-ua":'" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
                "sec-ch-ua-mobile":"?0",
                "sec-ch-ua-platform":"Windows"
            }
        })
    },
    updateUser: function(id){
        return cy.request({
            method: 'PATCH',
            url: `http://localhost:3001/users/${id}`,
            failOnStatusCode: false,
            body: {
                "id": `${id}`,
                "firstName": "generic",
                "lastName": "user",
                "email": `${id}@mailinator.com`,
                "phoneNumber": `${Number.parseInt(Math.random() * 100000000)}`
            },
            headers: {
                "Accept":"application/json, text/plain, */*",
                "Accept-Language":"pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                "Connection":"keep-alive",
                "Content-Type":"application/json",
                "Origin":"http://localhost:3000",
                "Referer":"http://localhost:3000/",
                "Sec-Fetch-Dest":"empty",
                "Sec-Fetch-Mode":"cors",
                "Sec-Fetch-Site":"same-site",
                "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
                "sec-ch-ua":'" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
                "sec-ch-ua-mobile":"?0",
                "sec-ch-ua-platform":"Windows"
            }
        })
    },
    chargeMoney: function(id){
        return cy.request({
            method: 'POST',
            url: 'http://localhost:3001/transactions',
            failOnStatusCode: false,
            body: {
                "transactionType": "request",
                "amount": "10",
                "description": "test",
                "senderId": `${id}`,
                "receiverId": "t45AiwidW"
            },
            headers: {
                "Accept":"application/json, text/plain, */*",
                "Accept-Language":"pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                "Connection":"keep-alive",
                "Content-Type":"application/json",
                "Origin":"http://localhost:3000",
                "Referer":"http://localhost:3000/",
                "Sec-Fetch-Dest":"empty",
                "Sec-Fetch-Mode":"cors",
                "Sec-Fetch-Site":"same-site",
                "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
                "sec-ch-ua":'" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
                "sec-ch-ua-mobile":"?0",
                "sec-ch-ua-platform":"Windows"
            }
        })
    },
    checkTransactions: function(){
        return cy.request({
            method:'GET',
            url: 'http://localhost:3001/transactions',
            failOnStatusCode: false,
            headers: {
                "Accept":"application/json, text/plain, */*",
                "Accept-Language":"pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                "Connection":"keep-alive",
                "Content-Type":"application/json",
                "Origin":"http://localhost:3000",
                "Referer":"http://localhost:3000/",
                "Sec-Fetch-Dest":"empty",
                "Sec-Fetch-Mode":"cors",
                "Sec-Fetch-Site":"same-site",
                "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
                "sec-ch-ua":'" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
                "sec-ch-ua-mobile":"?0",
                "sec-ch-ua-platform":"Windows"
            }

        })
    }

}