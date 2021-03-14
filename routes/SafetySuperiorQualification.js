const express = require('express');
const router = express.Router()

const { create, find, update, remove, read, safetySuperiorById,findsafetySuperiorsbyuser,setsafetySuperiorstatusdeleted,getactivesafetySuperiors,getsafetySuperiorsbydate,createsafetySuperior} = require('../controllers/safetySuperior');
const { safetySuperiormakingValidator } = require('../validator');
// find spec safetySuperior
router.get('/safetySuperior/:safetySuperiorId', read)

// post a safetySuperior
router.post('/safetySuperior/create/:userId',create);

router.post('/safetySuperior/createsafetySuperior',safetySuperiormakingValidator,createsafetySuperior);/*new!!!*/ 

router.put('/safetySuperior/:safetySuperiorId/:userId', update )

router.delete('/safetySuperior/:safetySuperiorId/:userId', remove )

router.get('/safetySuperiors', find)
router.get('/safetySuperiorsbyuser/:userId',findsafetySuperiorsbyuser)


router.get('/safetySuperiors/getallactivesafetySuperiors', getactivesafetySuperiors);
router.post('/safetySuperior/setsafetySuperiorstatusdeleted/:safetySuperiorId',setsafetySuperiorstatusdeleted);

//router.get('/safetySuperiors/schedulersafetySuperiors', schedulersafetySuperiors)

router.post('/safetySuperiors/getsafetySuperiorsbydate', getsafetySuperiorsbydate);

//router.post('/safetySuperior/specificdateschedule/:date',getspecificdatesafetySuperiors);

//router.param("userId", userById)
//router.param("safetySuperiorId", safetySuperiorById)

module.exports = router;

