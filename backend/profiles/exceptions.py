from rest_framework.exceptions import APIException

class NotYourProfile(APIException):
    status_code = 404
    default_detail = "The requested profile does not exist"
    
class ProfileNotFound(APIException):
    status_code = 403
    default_detail = "You can`t edit a profile that does not belong to you"