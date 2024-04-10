const Entry = require('./models/entryModel');


const entryController = {};
    
entryController.postEntry = async (req, res, next) => {
  try{
    const { content } = req.body;
    const entry = await Entry.create({ content });
    res.locals.entry = entry;
    return next();
  } catch (err) {
    return next({
      log: `Error handler caught postEntry middleware error: ${err}`,
      status: 400,
      message: {error: 'cannot add entry'}
    });
  }
};
 
entryController.getEntries = async (req,res, next) => {
  try{
    const entries = await Entry.find({});
    res.locals.entries = entries;
    return next();
  } catch (err) {
    return next({
      log: `Error handler caught getEntries middleware error: ${err}`,
      status: 400,
      message: {error: 'cannot get entries'}
    });
  }
};
    
entryController.deleteEntry = async (req,res, next) => {
  if (res.locals.isAdmin){
    try {
      const { id }  = req.params;
      const deletedEntry = await Entry.findByIdAndDelete(id, );
      if (!deletedEntry) {
        return next({
          log: 'Error handler caught deleteEntry middlewre error',
          status: 400,
          message: {error: 'Invalid ID'}
        });
      }
      res.locals.deletedEntry = deletedEntry;
      return next();
    } catch (err) {
      return next({
        log: `Error handler cuaght deleteEntry middleware error: ${err}`,
        status: 400,
        message: {error: 'cannot delete entry'}
      });
    }
  } else {
    res.locals.deletedEntry = null;
    return next();
  }
};
  
module.exports = entryController;