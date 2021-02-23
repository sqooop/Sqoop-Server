const myPageService = require('../service/myPageService');

module.exports = {
  getMyPage: async (req, res) => {
    const UserId = req.decoded.id;
    const myPageInfo = await myPageService.getMyPage(UserId, res);
    return myPageInfo;
  },
  updateMyPage: async (req, res) => {
    const {
      profileEmail,
      phone,
      sns,
      jobBig,
      jobSmall,
      skillBig,
      skillSmall,
      introduce,
      education,
      langHistory,
      certificateHistory,
      awardHistory
    } = req.body;

    const UserId = req.decoded.id;
    let profileImg = "";

    if (req.file ? req.file : false) {
      profileImg = req.file.location;
    }

    const updatedMyPage = await myPageService.updateMyPage(
      UserId,
      profileEmail,
      profileImg,
      phone,
      sns,
      jobBig,
      jobSmall,
      skillBig,
      skillSmall,
      introduce,
      education,
      langHistory,
      certificateHistory,
      awardHistory,
      res
    );
    
    return updatedMyPage;
  },
}