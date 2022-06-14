/*import React, { Component } from "react";
import ReactTable from "react-table";
import Faker from "faker";
import { Button, TextField, Divider } from "@material-ui/core";

export default class myTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      columns: [],
      maxData: 10,
      delay: 5,
      iteration: 500,
      yearFilter: []
    };

    Faker.locale = "fr_CA";
    this.onClickHandler = this.onClickHandler.bind(this);
    this.automateRefresh = this.automateRefresh.bind(this);
  }

  generateUsers() {
    for (let i = 0; i < this.state.maxData; i++) {
      const user = {
        title: Faker.name.title(),
        name: Faker.name.firstName(),
        surname: Faker.name.lastName(),
        //email: Faker.internet.email(),
        //phone: Faker.phone.phoneNumberFormat(),
        //website: Faker.internet.domainName(),
        //url: Faker.internet.url(),
        birthYear: Faker.date.between(1950, 2000).getFullYear()
        //birthCity: Faker.address.city()
      };
      this.setState(prevState => ({
        users: [...prevState.users, user]
      }));
    }
  }

  generateColumns() {
    this.setState({
      columns: [
        { Header: "Title", accessor: "title" },
        {
          Header: "Name",
          accessor: "name",
          filterMethod: (filter, row) => {
            return row[filter.id].includes(filter.value);
          }
        },
        { Header: "Surname", accessor: "surname" },
        {
          Header: "Birth Year",
          accessor: "birthYear",
          filterMethod: (filter, row) => {
            if (filter.value === "all") {
              return true;
            }

            return row[filter.id] === parseInt(filter.value);
          },
          Filter: ({ filter, onChange }) => (
            <select
              onChange={event => onChange(event.target.value)}
              style={{ width: "100%" }}
              value={filter ? filter.value : "all"}
            >
              {this.state.yearFilter}
            </select>
          )
        }
        //{ Header: "Email", accessor: "email" },
        //{ Header: "Phone", accessor: "phone" },
        //{ Header: "Website", accessor: "website" },
        //{ Header: "URL", accessor: "url" },
        //{ Header: "Birth Place", accessor: "birthCity" }
      ]
    });
  }

  getNameFilter() {
    let itemObject = {};
    let itemArray = this.state.users;

    for (var i = 0; i < itemArray.length; i++) {
      itemObject[itemArray[i].name] = itemArray[i].name;
    }

    return itemObject;
  }

  getYearFilter() {
    let items = [];
    items.push(<option value="all">All</option>);
    for (var i = 1950; i < 2000; i++) {
      items.push(<option value={i}>{i}</option>);
    }

    this.setState({
      yearFilter: items
    });
  }

  componentWillMount() {
    this.generateUsers();
    this.getYearFilter();
  }

  onClickHandler() {
    this.setState({ users: [] });
    this.generateUsers();
  }

  async automateRefresh() {
    for (let i = 0; i < this.state.iteration; i++) {
      this.setState({ users: [] });
      this.generateUsers();
      await sleep(this.state.delay);
    }
  }

  updateInputValue(e) {
    switch (e.target.id) {
      case "delay":
        this.setState({
          delay: e.target.value
        });
        break;
      case "iteration":
        this.setState({
          iteration: e.target.value
        });
        break;
      default:
        break;
    }
  }

  render() {
    if (Object.entries(this.state.columns).length === 0) this.generateColumns();

    return (
      <div>
        <Button
          variant="raised"
          style={{ marginTop: "10px" }}
          onClick={this.onClickHandler}
        >
          Refresh
        </Button>
        <Button
          variant="raised"
          style={{ marginTop: "10px", marginLeft: "20px" }}
          onClick={this.automateRefresh}
        >
          Automate
        </Button>
        <TextField
          id="delay"
          label="Delay"
          value={this.state.delay}
          onChange={e => this.updateInputValue(e)}
          style={{ marginBottom: "20px", marginLeft: "20px", width: "50px" }}
        />
        <TextField
          id="iteration"
          label="Iteration"
          value={this.state.iteration}
          onChange={e => this.updateInputValue(e)}
          style={{ marginBottom: "20px", marginLeft: "20px", width: "50px" }}
        />
        <br />
        <ReactTable
          columns={this.state.columns}
          data={this.state.users}
          filterable
          /*ptions={{
            filtering: true,
            pageSize: 15
          }}
        />
      </div>
    );
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
*/
