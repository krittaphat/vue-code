export function testAlert () {
	return document.write(`
	<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
    <form method="post" name="SendForm" action="http://directpay.besthappylife.biz/MerchantTransfer">
        <input type='hidden' name='MerchantCode' value='THBACCT' />
        <input type='hidden' name='CustomerID' value='M0796_5fc8facc9ff347548b16443d' />
        <input type='hidden' name='RefID' value='164952' />
        <input type='hidden' name='Currency' value='THB' />
        <input type='hidden' name='BankCode' value='SCB' />
        <input type='hidden' name='Amount' value='500.00' />
        <input type='hidden' name='Remark' value='' />
        <input type='hidden' name='TransactionDate' value='2021-01-07 04:54:36PM' />
        <input type='hidden' name='ReturnURL' value='http://api.besthappylife.biz/BackResponse/5f2fe7dd-5e55-4c1f-9cea-3a5fbd704d52/' />
        <input type='hidden' name='FrontURL' value='http://api.besthappylife.biz/FrontResponse/5f2fe7dd-5e55-4c1f-9cea-3a5fbd704d52/' />
        <input type='hidden' name='Language' value='en-us' />
        <input type='hidden' name='EncryptedSign' value='188D4B6CDF177A5B90EB96FA000AE091' />
        <input type='hidden' name='ClientIP' value='167.99.64.32' />
        <input type='hidden' name='TransferType' value='' />
        <input type='hidden' name='SpecificBankAccountUID' value='' />
        <input type='hidden' name='LogoUrl' value='https://api.racethewind.net/images/logo_blank.png' />
    </form>
</body>
</html>
<script>history.forward();</script>
<script>SendForm.submit();</script>
	`)
}
