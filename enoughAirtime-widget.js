document.addEventListener('alpine:init', () => {
    Alpine.data('enoughAirtimeWidget', function(){
        return {
            airtimeUsage : '',
            availableAmount : '0.00',
            airtimeMessage :'this is about airtime...',
            calculate(){
                //alert('!');
                this.airtimeMessage = enoughAirtime(this.airtimeUsage, this.availableAmount)
            }
        }

    }); 
})