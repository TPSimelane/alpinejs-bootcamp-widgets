document.addEventListener('alpine:init', () => {
    Alpine.data('totalPhoneBillWidget', function(){
        return {
            airtimeUsage : '',
            airtimeMessage :'0.00',
            calculate(){
                //alert('!');
                this.airtimeMessage = totalPhoneBill(this.airtimeUsage)
            }
        }

    }); 
})