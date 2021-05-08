# (# of matches in primary skills * 2 + # of matches in secondary skills * 0.5 / # of elements in tech stack) * YOE * Ratings Average

def generateApplicantScore(techStack, applicantDetails):

    primarySkills = applicantDetails.primarySkills
    secondarySkills = applicantDetails.secondarySkills
    yoe = applicantDetails.yoe
    ratings = applicantDetails.ratings
    commonPrimarySkills = len([for skill in techstack if skill in primaryskills])
    commonSecSkills = len([for skill in techstack if skill in secondarySkills])

    score = (( commonPrimarySkills * 2 + commonSecSkills * 0.5 )/len(techStack) ) * yoe * ratings

    return score

