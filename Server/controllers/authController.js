const authController = {};

authController.verifyUser = (req, res, next) => {
  const { user, pass } = req.body;
  if ( user === 'codesmith' && pass === 'ilovetesting') {
    res.cookie('token', 'user');
  } else if (user === 'codesmith_admin' && pass === 'testingisgreat') {
    res.cookie('token', 'admin');
  } else {
    return next({
      log: 'error in verifyUser middleware, invalid credentials',
      status: 401,
      message: 'unsuccessful login attempt'
    });
  }
  return next();
};

authController.checkCookie = (req, res, next) => {
  if (req.cookies.token === 'user' || req.cookies.token === 'admin') {
    res.locals.isValid = true;
  } 
  if (req.cookies.token === 'admin'){
    res.locals.isAdmin = true;
  }
  return next();
};

module.exports = authController;
