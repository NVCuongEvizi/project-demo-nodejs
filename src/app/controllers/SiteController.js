
class SiteController {
  // [GET] /404
  pageNotFound(req, res, next) {
    res.render('404');
  }
}

module.exports = new SiteController;