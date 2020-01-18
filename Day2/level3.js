let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let total = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let totalArray = total.match(/\d+/g)
let totally = totalArray[0]*12 + totalArray[1]+totalArray[2]*12