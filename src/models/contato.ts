import * as enums from '../utils/enums/Contato'

class Contato {
  id: number
  name: string
  phone: number
  email: string
  github: string
  grupo: enums.Grupo

  constructor(
    id: number,
    name: string,
    phone: number,
    email: string,
    github: string,
    grupo: enums.Grupo
  ) {
    this.id = id
    this.name = name
    this.phone = phone
    this.email = email
    this.github = github
    this.grupo = grupo
  }
}

export default Contato
