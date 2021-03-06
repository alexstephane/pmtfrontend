
// import React, { Component } from 'react';
// import SalesrepsView from "./SalesrepsView"

// class SalesrepController extends Component {

//     state = {
//         salesrep: {},
//         manager_id: "",
//           id: "",
//          activities: [],
//         prospects: []
//     }

//     componentDidMount() {

//         fetch(`http://localhost:3003/salesreps/${localStorage.getItem("user")}`)
//             .then(r => r.json())
//             .then(s => {
//                 this.setState({ salesrep: s })
//             })


//     }

//     allActivities = () => {
//         fetch(`http://localhost:3003/activities`)
//             .then(r => r.json())
//             .then(a => {
//                 this.setState({ activities: a })
//             })
//     }

//     allProspect = () => {

//         fetch(`http://localhost:3003/prospects`)
//             .then(r => r.json())
            
//             .then(m => {
//                 this.setState({ prospects: m })
//             })
//     }


//     updateProspect = (event, firstName, lastName, phone, email, status, id) => {

//         fetch(`http://localhost:3003/prospects/${id}`, {

//             method: 'PATCH',
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({

//                 "first_name": firstName,
//                 "last_name": lastName,
//                 "phone": phone,
//                 "email": email,
//                 "status": status


//             })
//         })
//             .then(r => r.json())

//             .then(s => {

//                 this.allProspect()
//             })
//     }

//     deleteProspect(ps_id) {
//         if (window.confirm('Are you sure?')) {
//             fetch(`http://localhost:3003/prospects/${ps_id}`, {
//                 method: 'DELETE',
//                 header: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 }
//             })

//                 .then(s => {
//                     this.allProspect()
//                 })
//         }
//     }
//     createProspect = (pro) => {

//         fetch("http://localhost:3003/prospects", {

//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 "first_name": pro.firstName,
//                 "last_name": pro.lastName,
//                 "email": pro.email,
//                 "status": pro.status,
//                 "phone": pro.phone,
//             })
//         }).then(m => {
//             this.allProspect()
//         })

//     }
//     createActivity = (a) => {

//         fetch("http://localhost:3003/activities", {

//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({

//                 "name": a.name,
//                 "prospect_id": a.prospect_id,
//                 "description": a.description,
//                 "status": a.status

//             })
//         }).then(m => {

//         })

//     }


//     render() {
//         return (
//             <div>


//                 <SalesrepsView
//                     salesrep={this.state.salesrep}
//                     allProspect={this.allProspect}
//                     prospects={this.state.prospects}
//                     updateProspect={this.updateProspect}
//                     deleteProspect={this.deleteProspect}
//                     createProspect={this.createProspect}
//                     createActivity={this.createActivity}
//                     activities={this.state.activities}
//                     allActivities={this.allActivities}
//                 />


//             </div>
//         )

//     }


// }

// export default SalesrepController



import React, { Component } from 'react';
import SalesrepsView from "./SalesrepsView"

class SalesrepController extends Component {

    // state = {
    //     salesrep: {
    //         manager_id: "",
    //         id: ""
    //     },

    //     prospects: []
    // }
    state = {
                salesrep: {},
                manager_id: "",
                  id: "",
                 activities: [],
                prospects: []
            }
        
    componentDidMount() {

        fetch(`http://localhost:3003/salesreps/${localStorage.getItem("user")}`)
            .then(r => r.json())
            .then(s => {
                this.setState({ salesrep: s })
            })


    }


    allActivities = () => {
        fetch(`http://localhost:3003/activities`)
            .then(r => r.json())
            .then(a => {
                this.setState({ activities: a })
            })
    }

    

    allProspect = () => {

        fetch(`http://localhost:3003/prospects?salesrep_id=${this.state.salesrep.id}`)
            .then(r => r.json())
            .then(m => {
                this.setState({ prospects: m })
            })
    }


    allActivities = () => {
                fetch(`http://localhost:3003/activities`)
                    .then(r => r.json())
                    .then(a => {
                        this.setState({ activities: a })
                    })
            }


    updateProspect = (event, firstName, lastName, phone, email, status, id) => {

        fetch(`http://localhost:3003/prospects/${id}`, {

            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({

                "first_name": firstName,
                "last_name": lastName,
                "phone": phone,
                "email": email,
                "status": status


            })
        })
            .then(r => r.json())

            .then(s => {

                this.allProspect()
            })
    }

    deleteProspect(ps_id) {
        if (window.confirm('Are you sure?')) {
            fetch(`http://localhost:3003/prospects/${ps_id}`, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

                .then(s => {
                    this.allProspect()
                })
        }
    }
    createProspect = (pro) => {

        fetch("http://localhost:3003/prospects", {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "first_name": pro.firstName,
                "last_name": pro.lastName,
                "email": pro.email,
                "status": pro.status,
                "phone": pro.phone,
                "created_by": this.state.salesrep.first_name + " " + this.state.salesrep.last_name,
                "manager_id": this.state.salesrep.manager_id,
                "salesrep_id": this.state.salesrep.id,
            })
        }).then(m => {
            this.allProspect()
        })

    }
    createActivity = (a) => {

        fetch("http://localhost:3003/activities", {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({

                "name": a.name,
                "prospect_id": a.prospect_id,
                "description": a.description,
                "status": a.status,
                "prospect_name": a.prospect_name,
                "created_by": this.state.salesrep.first_name + " " + this.state.salesrep.last_name,
                

            })
        }).then(m => {

        })

    }

    updateUser = (firstName, lastName, email) => {

        fetch(`http://localhost:3003/salesreps/${localStorage.getItem("user")}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({

                "first_name": firstName,
                "last_name": lastName,
                "email": email

            })
        })
            .then(r => r.json())
            .then(s => {
                this.setState({ salesrep: s })
            })
    }


    render() {
        return (
            <div>


                <SalesrepsView
                    salesrep={this.state.salesrep}
                    allProspect={this.allProspect}
                    prospects={this.state.prospects}
                    updateProspect={this.updateProspect}
                    deleteProspect={this.deleteProspect}
                    createProspect={this.createProspect}
                    createActivity={this.createActivity}
                    updateUser={this.updateUser}
                    activities={this.state.activities}
                  allActivities={this.allActivities}
                />


            </div>
        )

    }


}

export default SalesrepController



