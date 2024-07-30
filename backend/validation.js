const zod = require("zod")

const credential_schema = zod.object({
  username : zod.string(),
  password : zod.string().min(4)
})

module.exports = {
  credential_schema
}

