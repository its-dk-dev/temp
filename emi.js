function calculateEMI(loan) {
            let interst_rate=8.5
            let tenure=15
            let r = interst_rate / 12 / 100

            // loan * r * Math.pow((1+ r), tenure) / [Math.pow((1+r), tenure) - 1]
            // let interest_rate_per_year=loan*8.5/100
            // let emi_message = "Principle amount is: " + loan
            // let totalEmiAmountPerYear = (loan/15) + interest_rate_per_year
            // emi_message += "<br>Total interest rate with principle amount:"+ totalEmiAmountPerYear * 15;
            // emi_message += "<br>Estimeted EMI ammount for next 15 years is:"+totalEmiAmountPerYear;

            if(emi_message != "") {
                document.getElementById('emi_message').style.visibility = 'visible'
                document.getElementById('emi_message').innerHTML = loan * r * Math.pow((1+ r), tenure) / [Math.pow((1+r), tenure) - 1]
                // document.getElementById('emi_message').innerHTML = loan * interst_rate * Math.pow((1+ interst_rate), 180) / [Math.pow((1+interst_rate), 180) - 1]
            }
            else {
                document.getElementById('emi_message').style.visibility = 'hidden'
            }
      }
