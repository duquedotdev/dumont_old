import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';
import File from '../app/models/File';
import Airport from '../app/models/Airport';
import Aircraft from '../app/models/Aircraft';
import Employee from '../app/models/Employee';
import FlightInstructor from '../app/models/FlightInstructor';
import FlightSchedule from '../app/models/FlightSchedule';
import Flightschool from '../app/models/Flightschool';
import Student from '../app/models/Student';

const models = [
  User,
  File,
  Airport,
  Aircraft,
  Employee,
  FlightInstructor,
  FlightSchedule,
  Flightschool,
  Student,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
    models.map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
