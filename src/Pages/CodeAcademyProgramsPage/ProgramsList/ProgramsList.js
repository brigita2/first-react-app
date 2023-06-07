import ProgramItem from '../ProgramItem/ProgramItem';
import './programsList.css';

function ProgramList() {

  const programsData = [
    {
      programLink: '/#',
      image: 'https://codeacademy.lt/wp-content/uploads/2022/08/Black-18.svg',
      title: '„Salesforce“ CRM – pradedančių',
      description: '„Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis.',
      level: '1 lygis',
      time: 'Vakarais',
      label: 'Naujas',
    },
    {
      programLink: '/#',
      image: 'https://codeacademy.lt/wp-content/uploads//2021/03/Python_dark-1.svg',
      title: 'Python – pradedantiesiems užimtiems asmenims (223002626)',
      description: 'Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba, todėl šią kalbą išmokti yra nesunku, o ja naudotis – smagu ir patogu.',
      level: '1 lygis',
      time: 'Vakarais',
      label: 'Finansuojama UŽT',
    },
    {
      programLink: '/#',
      image: 'https://codeacademy.lt/wp-content/uploads//2021/03/Python_dark-1.svg',
      title: 'Python programa (223002543)',
      description: 'Python programuotojų laukia šviesi ateitis - pagrindiniai įgūdžiai pritaikomi konkurencingose ​​pramonės šakose, tokiose kaip dirbtinis intelektas, kibernetinis saugumas ir duomenų mokslas.',
      level: '2 lygis',
      time: 'Dienomis',
      label: 'Naujas',
    },
    {
      programLink: '/#',
      image: 'https://codeacademy.lt/wp-content/uploads//2021/03/BigData_dark-1.svg',
      title: 'Duomenų bazės ir analitika (223002691)',
      description: 'Duomenų mokslas padės nepasimesti tarp galybės duomenų, priimti pagrįstus sprendimus bei numatyti būsimus įvykius pasitelkiant mašininį mokymąsi.',
      level: '1 lygis',
      time: 'Vakarais',
      label: 'Finansuojama UŽT',
    }
  ];
    return (

        programsData.map(program => {
          
        })


      //   <div className="programs-list">
      //     <ProgramItem 
      //     programLink= '/#'
      //     image='https://codeacademy.lt/wp-content/uploads/2022/08/Black-18.svg'
      //     title='„Salesforce“ CRM – pradedančių'
      //     description='„Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis.'
      //     level='1 lygis'
      //     time='Vakarais'
      //     label='Naujas'
      //     />
      //     <ProgramItem 
      //     programLink= '/#'
      //     image='https://codeacademy.lt/wp-content/uploads//2021/03/Python_dark-1.svg'
      //     title='Python – pradedantiesiems užimtiems asmenims (223002626)'
      //     description='Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba, todėl šią kalbą išmokti yra nesunku, o ja naudotis – smagu ir patogu.'
      //     level='1 lygis'
      //     time='Vakarais'
      //     label='Finansuojama UŽT'
      //     />
      //     <ProgramItem 
      //     programLink= '/#'
      //     image='https://codeacademy.lt/wp-content/uploads//2021/03/Python_dark-1.svg'
      //     title='Python programa (223002543)'
      //     description='Python programuotojų laukia šviesi ateitis - pagrindiniai įgūdžiai pritaikomi konkurencingose ​​pramonės šakose, tokiose kaip dirbtinis intelektas, kibernetinis saugumas ir duomenų mokslas.'
      //     level='2 lygis'
      //     time='Dienomis'
      //     label='Naujas'
      //     />
      //     <ProgramItem 
      //     programLink= '/#'
      //     image='https://codeacademy.lt/wp-content/uploads//2021/03/BigData_dark-1.svg'
      //     title='Duomenų bazės ir analitika (223002691)'
      //     description='Duomenų mokslas padės nepasimesti tarp galybės duomenų, priimti pagrįstus sprendimus bei numatyti būsimus įvykius pasitelkiant mašininį mokymąsi.'
      //     level='1 lygis'
      //     time='Vakarais'
      //     label='Finansuojama UŽT'
      //     />

      // </div>
    )
}

export default ProgramList;