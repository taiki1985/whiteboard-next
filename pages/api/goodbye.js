const goodbye = (req,res) => {
  return res.status(200).json({message:'Good Bye!'})
}

export default goodbye
