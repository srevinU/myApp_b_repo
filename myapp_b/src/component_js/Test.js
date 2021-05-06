const test = [
    {
        "u_id": "704c5923-014f-469b-a512-2b6fc3e88d78",
        "u_type": "Test type 1",
        "u_name": "Test name 1",
        "u_price": "500",
        "u_image_url": null,
        "u_description": "Test description 1",
        "u_stars": 5,
        "u_active": true,
        "u_nb_of_sell": null,
        "u_qty": null
    },
    {
        "u_id": "57fcbc3c-31e9-4a8e-ba3c-7ece6493d5c7",
        "u_type": "Test type 1",
        "u_name": "Test name 1",
        "u_price": "500",
        "u_image_url": null,
        "u_description": "Test description 1",
        "u_stars": 5,
        "u_active": true,
        "u_nb_of_sell": null,
        "u_qty": null
    },
    {
        "u_id": "b5644561-faff-4bd9-aef8-1dac3a72d200",
        "u_type": "Test type 1",
        "u_name": "Test name 1",
        "u_price": "500",
        "u_image_url": null,
        "u_description": "Test description 1",
        "u_stars": 5,
        "u_active": true,
        "u_nb_of_sell": null,
        "u_qty": null
    },
    {
        "u_id": "87d7cd33-94a2-414d-b4e9-f43489e2f36a",
        "u_type": "Test type 1",
        "u_name": "Test name 1",
        "u_price": "500",
        "u_image_url": null,
        "u_description": "Test description 1",
        "u_stars": 5,
        "u_active": true,
        "u_nb_of_sell": null,
        "u_qty": null
    },
    {
        "u_id": "ae22b4d3-d8db-4749-b6a8-6480b5fb6311",
        "u_type": "Test type 1",
        "u_name": "Test name 1",
        "u_price": "500",
        "u_image_url": null,
        "u_description": "Test description 1",
        "u_stars": 5,
        "u_active": true,
        "u_nb_of_sell": null,
        "u_qty": null
    },
    {
        "u_id": "09104bbc-194d-460d-8a36-ddf8d127a619",
        "u_type": "Test type 1",
        "u_name": "Test name 1",
        "u_price": "500",
        "u_image_url": null,
        "u_description": "Test description 1",
        "u_stars": 5,
        "u_active": true,
        "u_nb_of_sell": null,
        "u_qty": null
    },
    {
        "u_id": "0050265a-a515-4e5b-ae44-5daad83d20ec",
        "u_type": "Test type 1",
        "u_name": "Test name 1",
        "u_price": "500",
        "u_image_url": null,
        "u_description": "Test description 1",
        "u_stars": 5,
        "u_active": true,
        "u_nb_of_sell": null,
        "u_qty": null
    },
    {
        "u_id": "ccbe8e45-2606-411e-b3bd-a18a1f973509",
        "u_type": "Test type 1",
        "u_name": "Test name 1",
        "u_price": "500",
        "u_image_url": null,
        "u_description": "Test description 1",
        "u_stars": 5,
        "u_active": true,
        "u_nb_of_sell": null,
        "u_qty": null
    },
    {
        "u_id": "5e5411c7-2a35-4518-a46f-be7d7a5ec640",
        "u_type": "Test type 1",
        "u_name": "Test name 1",
        "u_price": "500",
        "u_image_url": null,
        "u_description": "Test description 1",
        "u_stars": 5,
        "u_active": true,
        "u_nb_of_sell": null,
        "u_qty": null
    },
    {
        "u_id": "01daa590-e661-4b41-9392-d233db13e81f",
        "u_type": "Test type 1",
        "u_name": "Test name 1",
        "u_price": "500",
        "u_image_url": null,
        "u_description": "Test description 1",
        "u_stars": 5,
        "u_active": true,
        "u_nb_of_sell": null,
        "u_qty": null
    },
    {
        "u_id": "66f2a9b3-7ac1-4377-b881-1e0cd9a74051",
        "u_type": "Test type 1",
        "u_name": "Test name 1",
        "u_price": "500",
        "u_image_url": null,
        "u_description": "Test description 1",
        "u_stars": 5,
        "u_active": true,
        "u_nb_of_sell": null,
        "u_qty": null
    },
    {
        "u_id": "371c8b35-8ecb-4f13-b922-4e58d88a3add",
        "u_type": "Test type 1",
        "u_name": "Test name 1",
        "u_price": "500",
        "u_image_url": null,
        "u_description": "Test description 1",
        "u_stars": 5,
        "u_active": true,
        "u_nb_of_sell": null,
        "u_qty": null
    },
    {
        "u_id": "7065a425-b853-4cf9-8c3c-92259e601fc8",
        "u_type": "Test type 1",
        "u_name": "Test name 1",
        "u_price": "500",
        "u_image_url": null,
        "u_description": "Test description 1",
        "u_stars": 5,
        "u_active": true,
        "u_nb_of_sell": null,
        "u_qty": null
    },
    {
        "u_type": "Created",
        "u_name": "",
        "u_price": "",
        "u_image_url": null,
        "u_description": "",
        "u_stars": 0,
        "u_active": "",
        "u_nb_of_sell": "",
        "u_qty": "",
        "sys_action": "created"
    },
    {
        "u_type": "Created",
        "u_name": "",
        "u_price": "",
        "u_image_url": null,
        "u_description": "",
        "u_stars": 0,
        "u_active": "",
        "u_nb_of_sell": "",
        "u_qty": "",
        "sys_action": "created"
    }
]



let newTest = test.filter((e) => {
    return e.sys_action === "created";
})

console.table(newTest);