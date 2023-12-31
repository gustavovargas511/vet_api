export const create = (req, res) => {
    console.log(req.body);
    const {name, com_name, species} = req.body;
    res.json({ok: true})
  };
