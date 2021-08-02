const AllMarkersByCountry = {
  us: {
    markers: [
      /*
      // VPN: UNITED STATES
      {
          id: '1',
          headline: 'Coronavirus cases in the United States reach 1,000 as officials continue to call off large gatherings',
          color: '#FCFEC1',
          city: 'New York City',
          coordinates: [40.7128, -74.0060],
          value: 100,
          tags: '',
          code: 'US',
          date: '11 Mar 2020',
          occupation: 'CNN',
          paragraph: 'As the number of novel coronavirus cases in the United States reached 1,000 on Tuesday, officials further clamped down on large public gatherings and increasingly called for students to take classes online.',
      },
      {
          id: '2',
          headline: 'Coronavirus: Grand Princess Cruise Ship Docks Off California Coast',
          color: '#FCFEC1',
          city: 'New York City',
          coordinates: [40.7128, -74.0060],
          value: 100,
          tags: '',
          code: 'US',
          date: '9 Mar 2020',
          occupation: 'NPR',
          paragraph: 'The ship's more than 2,400 passengers are headed to either medical care or a quarantine due to the coronavirus.',
      },
      {
          id: '3',
          headline: 'US coronavirus: California's first death was person who sailed on recent cruise',
          color: '#FCFEC1',
          city: 'New York City',
          coordinates: [40.7128, -74.0060],
          value: 100,
          tags: '',
          code: 'US',
          date: '4 Mar 2020',
          occupation: 'CNN',
          paragraph: 'As officials around the country urged local communities to think about ways to stop the novel coronavirus from spreading, California authorities said Wednesday that a person who died from Covid-19 had recently been on a cruise.',
      },
      {
          id: '4',
          headline: 'Coronavirus in the US: Tracking cases and deaths',
          color: '#FCFEC1',
          city: 'New York City',
          coordinates: [40.7128, -74.0060],
          value: 100,
          tags: '',
          code: 'US',
          date: '13 Mar 2020',
          occupation: 'VOX',
          paragraph: 'The number of Covid-19 cases is expected to increase significantly due to better testing.',
      },
      {
          id: '5',
          headline: 'Outbreak Strikes Seattle Area as Testing Is Scrutinized',
          color: '#FCFEC1',
          city: 'New York City',
          coordinates: [40.7128, -74.0060],
          value: 100,
          tags: '',
          code: 'US',
          date: '2 Mar 2020',
          occupation: 'The New York Times',
          paragraph: 'The epidemic continues to expand rapidly worldwide, topping 90,000 cases and 3,000 deaths. U.S. officials say virus testing kits will soon become widely available.',
      }, 
      */

      // VPN: North America
      {
        id: "1",
        headline:
          "Sernea Williams",
        color: "#FCFEC1",
        city: "Saginaw",
        coordinates: [43.4195, -83.9508],
        value: 100,
        tags: "",
        code: "MI",
        date: "26 September 1981",
        occupation: "",
        paragraph:
          "Donald Trump and Mike Pence announced Saturday that the United States will broaden its European travel ban, adding the United Kingdom and Ireland to its list, and was considering imposing restrictions on travel within the U.S."
      },
      {
        id: "2",
        headline:
          "Amanda Gorman",
        color: "#FCFEC1",
        city: "Los Angeles",
        coordinates: [34.0522, -118.2437],
        value: 100,
        tags: "",
        code: "CA",
        date: "7 Mar 1998",
        occupation: "",
        paragraph:
          "U.S. President Donald Trump was considering a national disaster declaration and new travel advisories while Congress unveiled a coronavirus aid package as Washington raced Wednesday to confront the outbreak."
      },
      {
        id: "3",
        headline:
          "Elizabeth Blackwell",
        color: "#FCFEC1",
        city: "Los Angeles",
        coordinates: [34.0522, -118.2437],
        value: 100,
        tags: "",
        code: "CA",
        date: "7 Mar 1998",
        occupation: "",
        paragraph:
          "U.S. President Donald Trump was considering a national disaster declaration and new travel advisories while Congress unveiled a coronavirus aid package as Washington raced Wednesday to confront the outbreak."
      },
        {
        id: "4",
        headline:
          "Chien-Shiung Wu",
        color: "#FCFEC1",
        city: "Los Angeles",
        coordinates: [34.0522, -118.2437],
        value: 100,
        tags: "",
        code: "CA",
        date: "7 Mar 1998",
        occupation: "",
        paragraph:
          "U.S. President Donald Trump was considering a national disaster declaration and new travel advisories while Congress unveiled a coronavirus aid package as Washington raced Wednesday to confront the outbreak."
      },
      {
        id: "5",
        headline:
          "Mae C. Jemison",
        color: "#FCFEC1",
        city: "Los Angeles",
        coordinates: [34.0522, -118.2437],
        value: 100,
        tags: "",
        code: "CA",
        date: "7 Mar 1998",
        occupation: "",
        paragraph:
          "U.S. President Donald Trump was considering a national disaster declaration and new travel advisories while Congress unveiled a coronavirus aid package as Washington raced Wednesday to confront the outbreak."
      },
      {
        id: "6",
        headline:
          "Katherine Johnson",
        color: "#FCFEC1",
        city: "Los Angeles",
        coordinates: [34.0522, -118.2437],
        value: 100,
        tags: "",
        code: "CA",
        date: "7 Mar 1998",
        occupation: "",
        paragraph:
          "U.S. President Donald Trump was considering a national disaster declaration and new travel advisories while Congress unveiled a coronavirus aid package as Washington raced Wednesday to confront the outbreak."
      },
      {
        id: "7",
        headline:
          "Amelia Earhart",
        color: "#FCFEC1",
        city: "Los Angeles",
        coordinates: [34.0522, -118.2437],
        value: 100,
        tags: "",
        code: "CA",
        date: "7 Mar 1998",
        occupation: "",
        paragraph:
          "U.S. President Donald Trump was considering a national disaster declaration and new travel advisories while Congress unveiled a coronavirus aid package as Washington raced Wednesday to confront the outbreak."
      },
      {
        id: "8",
        headline:
          "Nellie Bly",
        color: "#FCFEC1",
        city: "Los Angeles",
        coordinates: [34.0522, -118.2437],
        value: 100,
        tags: "",
        code: "CA",
        date: "7 Mar 1998",
        occupation: "",
        paragraph:
          "U.S. President Donald Trump was considering a national disaster declaration and new travel advisories while Congress unveiled a coronavirus aid package as Washington raced Wednesday to confront the outbreak."
      },
      {
        id: "9",
        headline:
          "Beyonce Knowles",
        color: "#FCFEC1",
        city: "Los Angeles",
        coordinates: [34.0522, -118.2437],
        value: 100,
        tags: "",
        code: "CA",
        date: "7 Mar 1998",
        occupation: "",
        paragraph:
          "U.S. President Donald Trump was considering a national disaster declaration and new travel advisories while Congress unveiled a coronavirus aid package as Washington raced Wednesday to confront the outbreak."
      },


      // VPN: South America
      {
        id: "1",
        headline:'Liliuokalani',
        color: "#FCFEC1",
        city: "Honolulu",
        coordinates: [21.3069,-157.8583],
        value: 100,
        tags: "",
        code: "HI",
        date: "Born in September 2, 1838 Death Novemener 11,1917",
        occupation: "",
        paragraph:
          "Queen Lili’uokalani also known as Lydia Lili’u Lokoku Walania Wewehi Kamaka’ena. Her and her family were close with the royal court and worked on charity projects with the king and queen. When her brother died after being the successor, she was sworn as queen. Her main goal was to reestablish power and sovereignty that her brother had to give up to the United States. Eventually, she tried to rewrite the Constitution and restore the monarchy but a coup d’état was created and she was overthrown and the United States was able to seize Hawaii."
      },
      {
        id: "2",
        headline:
          'Isabel Perón',
        color: "#FCFEC1",
        city: "La Rioja",
        coordinates: [-29.4135, -66.8565],
        value: 100,
        tags: "",
        code: "AR",
        date: "Born on February 4th. 1931 | Death July 1, 1974",
        occupation: "",
        paragraph:
          ' Isabel Perón rose to power through her husband, Juan Perón, who was previously the Argentine President. She served as her husband’s Vice President and First Lady during his third term. After her husband passed away, she took over as President and everyone initially supported her but after she issued a government run suppression campaign against adversaries she was not favored.'
      },
      {
        id: "3",
        headline: 'Frida Kahlo',
        color: "#FCFEC1",
        city: "Coyoacán",
        coordinates: [19.3487, -99.1629],
        value: 100,
        tags: "",
        code: "MX",
        date: "Born on July 6th, 1907 | Death July 13th, 1954",
        occupation: "",
        occupation: "Painter",
        paragraph:
          "When Kahlo was just 6 she had polio and then again at 18 she hurt her ribs, shoulders, legs and collarbone in an accident. Then later she lost her child and had a strained marriage with her husband. She didn’t let these setbacks get to her and created her first self portrait at 19. Her life and body is what motivated her mostly and she was known as someone who painted self portraits."
      },
      {
        id: "4",
        headline: "Rigoberta Menchu",
        color: "#FCFEC1",
        city: "Laj Chimel",
        coordinates: [15.7835, -90.2308],
        value: 100,
        tags: "",
        code: "GT",
        date: "January 9, 1959-present",
        occupation: "",
        occupation: "Novelist",
        paragraph:
          "Early on, she helped her family with farm work but she later became involved in social reform through the Catholic Church and in the women’s rights movement. Rigoberta joined the committee of the Peasant Union(CUC) like some of her family members. She has been known as an advocate for Indian rights as well as ethno-cultural reconciliation and she has earned international awards for what she has done."
      },
      {
        id: "5",
        headline: 'Isabel Allende',
        color: "#FCFEC1",
        city: "Lima",
        coordinates: [-12.0464, -77.0428],
        value: 100,
        tags: "",
        code: "PE",
        date: "August 2,1942 - Present",
        occupation: "Journalist",
        paragraph:
          "Isabel was born in Peru but moved to CHile at the age of 3 and she traveled to many countries because of her step father. She moved back to CHile as an adult and worked as a journalist. After the military coup of Pinochet she moved around to a few other countries and wrote many short stories for children, humor books, theater plays and narratives and she was awarded for her works one being the Presidential Medal of Freedom in 2014."
      },
      {
        id: "6",
        headline: 'Policarpa Salavarrieta',
        color: "#FCFEC1",
        city: "Guaduas",
        coordinates: [5.0678, -74.5953],
        value: 100,
        tags: "",
        code: "CO",
        date: "January 26,1795 - November 14,1817",
        occupation: "Seamstress",
        paragraph:"Policarpa was born into a Creole family and her and her brothers were revolutionaries during the Independence Movement in Guaduas as well as in Bogotá. Since Colombia was vice royalty for Spain, she trained as a seamstress and gained positions in Spanish royalist women in Bogotá and passed political information to rebels to overthrow the Spanish. She was later captured and killed but was recognized for what she had done."
      },
      {
        id: "7",
        headline: 'Carmen Miranda',
        color: "#FCFEC1",
        city: "Marco de Canaveses",
        coordinates: [41.1845, -8.1478],
        value: 100,
        tags: "",
        code: "PT",
        date: "Feburary 9,1909 - August 5,1955",
        occupation: "Singer, Dancer, Broadway Actress and Filmstar",
        paragraph:"Carmen moved from Portugal to Brazil as a toddler and she began singing as a teenager. Later she started singing on the local radio and gained a recording contract with RCA and was on the road to becoming a Brazilian Star. She made an United States debut in 1939 for singing and dancing  in Broadway revues and nightclub performances. She also made television and live appearances and one of her films was “Down Argentine Way” and she later died of a heart attack."
      },
      {
        id: "8",
        headline: 'Manuela Saénz',
        color: "#FCFEC1",
        city: "Quito",
        coordinates: [-0.1807, -78.4678],
        value: 100,
        tags: "",
        code: "EC",
        date: "December 27, 1797 - November 23, 1856",
        occupation: "Mistress of Liberator of South America",
        paragraph:'Manuela was the daughter of a Spanish man and when her mother died she went to live at the convent of Santa Catalina. She later married James Thorne and she went to Lima and she looked into the movement of Independence. When she went back to her hometown she met her husband Bolivar, who was the Liberator of South America. She tried to keep the Peruvians on his side and also saved her husband from conspirators as she fought for independence.'
      },

     // Africa
      {
        id: "1",
        headline:"Hatshepsut",
        color: "#FCFEC1",
        city: "Ancient Egypt",
        coordinates: [26.8206, 30.8025],
        value: 100,
        tags: "",
        code: "EG",
        date: "1508 BC - 1459 BC",
        occupation: "5th Pharaoh of the Eighteenth Dynasty of Egypt",
        paragraph:"Hatshepsut is the daughter of King Thutmose 1 and later became the queen of Egypt after she married her half brother. After her husband passed away, she started acting like a regent for her stepson and later took power of pharaoh. That is when she extended trade and oversaw building projects. She is one of the female pharaohs of Egypt and the most famous one of all."
      },
      {
        id: "2",
        headline:"Aoua Keita",
        color: "#FCFEC1",
        city: "Bamako",
        coordinates: [12.6392, -8.0029],
        value: 100,
        tags: "",
        code: "ML",
        date: " July 12, 1912 -  May 7, 1980",
        occupation: "Malian Midwife and Anti-Colonial Activist",
        paragraph:"Aoua went to Bamako's first girls school and later went off to study midwifery at Bakar School of Medicine. She was a member of the African Democratic Rally and made many contributions and later was named RDA’s Commissioner Women. She was elected to Parliament and later started a women’s made union and she fought for improving living conditions for African women and enacted the marriage and Guardianship code in 1967. She was the first woman from a French speaking West African country to be elected to the National Legislative Assembly."
      },
      {
        id: "3",
        headline:"Rebecca Enonchong",
        color: "#FCFEC1",
        city: "Cameroon",
        coordinates: [7.3697, -12.3547],
        value: 100,
        tags: "",
        code: "CA",
        date: "July 14, 1967- Present",
        occupation: "CEO/Founder of AppsTech and Technology Entrepreneur",
        paragraph:"Rebecca attended the Caltholic University of America and got a Bachelors of Science and a Master of Science in Economics. She spent most of her time promoting technology in Africa. She has won many awards and was the founder and chairperson of the African Technology Forum, Chair of ActiveSpace, Cofounder and Board Member of Cameroon Angels Network and African Business Angels Network, Board of Venture Capital for Africa of Salesforce.org and African Media Initiative and serves as a mentor to many African based technology startups. She is also the founder and CEO of AppsTech and I/O Spaces."
      },
      {
        id: "4",
        headline: "Wangari Maathai",
        color: "#FCFEC1",
        city: "Ihithe",
        coordinates: [-0.4794, 36.8600],
        value: 100,
        tags: "",
        code: "KE",
        date: "April 1, 1940 - September 25,2011",
        occupation: "Social, Economical and Political Activist",
        paragraph:"Wangari founded the Green Belt Movement and the organization's mission is to encourage women to plant trees to prevent deforestation and environmental degradation. She started expanding and using her organization against the abuse of power. She was later elected as a Member of Parliament and served as an assistant Minister in the Ministra for Environmental and Natural Resources. She was the first woman to get a PhD in East and Central Africa and was the first African Women to be awarded the Nobel Peace Prize."
      },
      {
        id: "5",
        headline: "Leizel Huber",
        color: "#FCFEC1",
        city: "Durban",
        coordinates: [-29.8587, 31.0218],
        value: 100,
        tags: "",
        code: "SA",
        date: "August 21, 1976 - Present",
        occupation: "Former U.S Tennis Player",
        paragraph: " Leziel is a South African-American and represented the United States internationally until August of 2007. She has won four Grand Slam titles in women's doubles and two mixed doubles. On 12 November 2007, she became the co-world Number 1 in doubles with her partner and later went on to become Number 1 solo."
      },
      {
        id: "6",
        headline: "Leizel Huber",
        color: "#FCFEC1",
        city: "Durban",
        coordinates: [-29.8587, 31.0218],
        value: 100,
        tags: "",
        code: "SA",
        date: "August 21, 1976 - Present",
        occupation: "Former U.S Tennis Player",
        paragraph: " Leziel is a South African-American and represented the United States internationally until August of 2007. She has won four Grand Slam titles in women's doubles and two mixed doubles. On 12 November 2007, she became the co-world Number 1 in doubles with her partner and later went on to become Number 1 solo."
      },
      {
        id: "7",
        headline: "Agnes Binagwaho",
        color: "#FCFEC1",
        city: "Rwanda",
        coordinates: [-1.9403, 29.8739],
        value: 100,
        tags: "",
        code: "SA",
        occupation: " Pediatrician, Minister of Health for the Republic of Rwanda and Vice Chancellor of the University of Global Health Equity",
        paragraph: "Agnes is the Vice Chancellor of the University of Global Health Equity. She is a Rwandan Pediatrician and was the Executive Secretary of Rwanda’s National AIDS Control Commission, Permanent Secretary of the Ministry of Health and Minister of Health. She is a lecturer at Harvard, serves as a Senior Advisor at the Director General of World Health Organization, member of U.S National Academy of Medicine and African Academy of Sciences. Her research mainly covers health equity and human rights, involving science and bettering care delivery systems."
      },
      {
        id: "8",
        headline: "Angélique Kidjo",
        color: "#FCFEC1",
        city: "Ouidah",
        coordinates: [6.3716, 2.0763],
        value: 100,
        tags: "",
        code: "BJ",
        date: "July 14, 1960 - Present",
        occupation: "Beninese Singer, Songwriter, Actress and Activist",
        paragraph: " Angélique had a family full of performing artists and started her career fairly early on; she recorded her first album, Pretty, in 1988. She is a Beminese singer who is known for collaborating with internationally known popular musicians and blending many music styles in her work. She is also an advocate for education and health care for both women and children."
      },

      // VPN: Asia
      {
        id: "1",
        headline:
          "Murasaki Shikibu",
        color: "#FCFEC1",
        city: "Kyoto, Japan",
        coordinates: [35.0116, 135.7681],
        value: 100,
        tags: "",
        date: "c. 973 -  c. 1014 ",
        occupation: "Japanese Writer",
        paragraph: " Japanese writer and lady-in-waiting who was the author of the The Tale of Genji, generally considered the greatest work of Japanese literature and thought to be the world’s oldest full novel."
      },
      {
        id: "2",
        headline:
          "Corazon Aquino",
        color: "#FCFEC1",
        city: "Philippines",
        coordinates: [12.8797, 121.7740],
        value: 100,
        tags: "",
        
        date: "January 25, 1933 - August 1, 2009",
        occupation: "Former president of the Philippines",
        paragraph:
          "Corazon was Philippine political leader who served as the first female president (1986–92) of the Philippines, restoring democratic rule in that country after the long dictatorship of Ferdinand Marcos."
      },
      {
        id: "3",
        headline:
          "Li Na",
        color: "#FCFEC1",
        city: "Wuhan, China",
        coordinates: [30.5928, 114.3055],
        value: 100,
        tags: "",
        
        date: " February 2 1982 - Present",
        occupation: "Li Na",
        paragraph:
          "Li Na is a Chinese former professional tennis player who retired in September 2014. Winner of two Grand Slam singles titles, she has played a major role in making tennis a popular sport in China. "
      },
      {
        id: "4",
        headline:
          "Zheng Yi Sao",
        color: "#FCFEC1",
        city: "Guangdong, China",
        coordinates: [23.3790, 113.7633],
        value: 100,
        tags: "",
        date: "1775- 1844",
        occupation: "Chinese pirate leader",
        paragraph:"The most powerful pirate in history was a woman who was born into poverty in Guangzhou, China, in the late 1700s. Over the next decade, the pirate queen built a fleet of over 1,800 ships and 70,000 men. On land and sea, Zheng Yi Sao’s power rivaled the emperor himself."
      },
      {
        id: "5",
        headline:"Anna May Wong",
        color: "#FCFEC1",
        city: "Los Angles, CA",
        coordinates: [34.0522, -118.2437],
        value: 100,
        tags: "",
        
        date: "January 3, 1905 - February 3, 1961",
        occupation: "Actor",
        paragraph: "Anna was an American actress, considered to be the first Chinese American Hollywood movie star, as well as the first Chinese American actress to gain international recognition."
      },
      {
        id: "6",
        headline:"Rani Lakshmibai",
        color: "#FCFEC1",
        city: "Varanasi, India",
        coordinates: [25.3176, 82.9739],
        value: 100,
        tags: "",
        
        date: "November 19, 1828 - June 18, 1858",
        occupation: " Maharani consort",
        paragraph: " Rani was a legendary figure associated with early resistance against the British Raj, she played an important role during the Indian Rebellion of 1857."
      },
      {
        id: "7",
        headline:"Malala Yousafzai",
        color: "#FCFEC1",
        city: "Mingora ,Pakistan",
        coordinates: [34.7717, 72.3602],
        value: 100,
        tags: "",
        
        date: "Jul 12, 1997 - Present",
        occupation: "Activist",
        paragraph: "Malala is a Pakistani activist for female education and the youngest Nobel Prize laureate. She is known for human rights advocacy, especially the education of women and children"
      },
      {
        id: "8",
        headline:"Amal Clooney",
        color: "#FCFEC1",
        city: "Beirut, Lebanon",
        coordinates: [33.8938, 35.5018],
        value: 100,
        tags: "",
        
        date: "February 3, 1978 - Present",
        occupation: "Lawyer",
        paragraph: "Amal Clooney is a Lebanese-British barrister at Doughty Street Chambers, specialising in international law and human rights."
      },

      // VPN: Europe
      {
        id: "1",
        headline: "Hypatia",
        color: "#FCFEC1",
        city: "Alexandria, Egypt",
        coordinates: [31.2001, 29.9187],
        value: 100,
        tags: "",
        date: " c. 350–370 AD - March 415 AD",
        occupation: "Roman Philosopher",
        paragraph:
          "Hypatia was a prominent thinker of the Neoplatonic school in Alexandria where she taught philosophy and astronomy"
      },
      {
        id: "2",
        headline: "Catherine the Great",
        color: "#FCFEC1",
        city: "Ducal Castle, Szczecin",
        coordinates: [53.4262, 14.5603],
        value: 100,
        tags: "",
        
        date: "May 02, 1729 - Nov 17, 1796",
        occupation: "Tsarina of Russia",
        paragraph:
          "Catherine the Great was empress regnant of All Russia from 1762 until 1796 – the country's longest-ruling female leader. She came to power following a coup d'état that overthrew her husband and second cousin, Peter III. Under her reign, Russia grew larger, its culture was revitalised, and it was recognised as one of the great powers of Europe."
      },
      {
        id: "3",
        headline: "Lise Meitner",
        color: "#FCFEC1",
        city: "Vienna, Austria",
        coordinates: [48.2082, 16.3738],
        value: 100,
        tags: "",
       
        date: "November 7, 1878 -  October 27 1968",
        occupation: " Austrian Scientist",
        paragraph:
          "Lise was a leading Austrian-Swedish physicist who was one of those responsible for the discovery of the element protactinium and nuclear fission."
      },
      {
        id: "4",
        headline:
          "Melanie Klein",
        color: "#FCFEC1",
        city: "Vienna, Austria",
        coordinates: [48.2082, 16.3738],
        value: 100,
        tags: "",
        
        date: "Mar 30, 1882 - Sep 22, 1960",
        occupation: "Australian Author",
        paragraph:
          "an Austrian-British author and psychoanalyst known for her work in child analysis. She was the primary figure in the development of object relations theory. "
      },
      {
        id: "5",
        headline:
          " Marie Curie",
        color: "#FCFEC1",
        city: "Warsaw, Poland",
        coordinates: [52.2297, 52.2297],
        value: 100,
        tags: "",
       
        date: "Nov 07, 1867 -  Jul 04, 1934",
        occupation: "Polish Scientist",
        paragraph:
          "a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity."
      },

      // VPN: Australia
      {
        id: "1",
        headline: "Fanny Cochrane Smith",
        color: "#FCFEC1",
        city: "Flinders Island, Australia",
        coordinates: [-39.9836, 148.0527],
        value: 100,
        tags: "",
        
        date: "December 1834 - February 24, 1905",
        occupation: "Linguist and Community Worker",
        paragraph:
          "Fanny was born at the Wybalenna Settlement of Flinders Island, when she was 7 years old she lived in many European homes and institutions, mainly at Robert Clark’s house where she dealt with neglect and brutality. After her marriage and Truganini passed away she was the last Tasmanian and she became a Methodist and a fundraiser. She was proud of her Aborginal culture and what she knew about food gathering and bush medicine. She was known for wax cylinder recordings of Aboriginal songs."
      },
      {
        id: "2",
        headline: " Louise Mack",
        color: "#FCFEC1",
        city: "Hobart, Australia",
        coordinates: [-42.8826, 147.3257],
        value: 100,
        date: " October 10, 1870 - November 23, 1935",
        occupation: "Journalist and Novelist",
        paragraph:
          "Louise started writing in her teen years, while she attended Sydney Girls High School she edited rival magazines. In 1914, she travelled through Germany to other places reporting to Evening News and Daily Mail during the World War. She wrote many stories about her experiences too. Louise made major contributions towards women’s achievements in journalism."
      },
      {
        id: "3",
        headline: "Elizabeth Blackburn",
        color: "#FCFEC1",
        city: "Hobart, Australia",
        coordinates: [-42.8826, 147.3257],
        value: 100,
        tags: "",
        
        date: " November 26, 1948 - ",
        occupation: "Biological Researcher",
        paragraph:
          "Elizabeth was interested in animals and nature early on and went off to study biochemistry at the University in Melbourne and received her PhD  from Cambridge University. She was a researcher at Yale University and University of California. Elizabeth discovered telomeres have a certain DNA and later she proved the DNA difference prevents chromosomes from breaking with Jack Szostak and later it was discovered enzyme telomerase produces telomeres DNA with Carol Greider."
      },
      {
        id: "4",
        headline:
          'Dame Jean Macnamara',
        color: "#FCFEC1",
        city: "Beechworth , Australia",
        coordinates: [-36.3533, 146.6877],
        value: 100,
        tags: "",
       
        date: "April 1, 1899 - October 13, 1968",
        occupation: "Medical Doctor and Scientist",
        paragraph:
          "Annie as a teen during World War 1 felt she wanted to be some “use to the world”. When the polio epidemic struck after she graduated medical school she focused on treating and researching the virus, she discovered there was more than one strain and continued to develop new treatments and rehabilitation focusing on children. Her work helped for the creation of the polio vaccine which was developed in 1955."
      },
      {
        id: "5",
        headline:
          "Evelyn Scott",
        color: "#FCFEC1",
        city: "Ingham, Queensland",
        coordinates: [-18.6511, 146.1568],
        value: 100,
        tags: "",
        
        date: " 1935  -  September 21, 2017",
        occupation: "Indigenous Australian Social Activist and Educator ",
        paragraph:
          "Evelyn was first active with the Townsville Aboriginal and Torres Strait Islander Advancement League. Later she was the Vice President for the Federal Council for the Advancement of Aborginals and Torres Strait Islands and later was the General Secretary when it became Indigenous led. She was apart of many other organizations and she held a core belief that women’s voices were important in politics. "
      },
      {
        id: "6",
        headline:
          "Ashleigh Barty",
        color: "#FCFEC1",
        city: "Ipswich, Queensland",
        coordinates: [-27.6146, 152.7608],
        value: 100,
        tags: "",
        
        date: " April 24, 1996 -  Present",
        occupation: "Australian Tennis Player and Former Cricket Player",
        paragraph:
          "Ashleigh is a top-ranked Australian Tennis Player in both singles and doubles. She started playing tennis at the age of 4. She has won 10 doubles titles as well as 5 singles titles on the WTA Tour."
      },

      
    ]
  },

  eg: {
    markers: [
      // VPN: UNITED STATES
      {
        id: "1",
        headline:
          "3 New Coronavirus Cases Confirmed In Santa Clara County, Including Travelers To Egypt",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "1 Mar 2020",
        occupation: "CBS San Francisco",
        paragraph:
          "Three new cases of coronavirus were confirmed by Santa Clara County public health officials on Sunday evening, bringing the total number of cases in the county to seven."
      },
      {
        id: "2",
        headline: "Egypt imposes nighttime curfew to slow coronavirus",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "24 Mar 2020",
        occupation: "Aljazeera",
        paragraph:
          "Nationwide two-week curfew from 7pm to 6am will begin on Wednesday, as closure of schools and universities is extended."
      },
      {
        id: "3",
        headline:
          "Governor: Maryland coronavirus cases linked to Egyptian cruise and Texas cases",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "6 Mar 2020",
        occupation: "USA Today",
        paragraph:
          "Three Maryland residents tested positive Thursday for the coronavirus after traveling on an Egyptian cruise on the Nile River, Maryland Gov. Larry Hogan said on Friday evening."
      },
      {
        id: "4",
        headline:
          "Egypt confirms 33 new cases of coronavirus on Nile cruise ship",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "7 Mar 2020",
        occupation: "Reuters",
        paragraph:
          "Egypt confirmed 33 new cases of coronavirus on Saturday on a River Nile cruise ship."
      },
      {
        id: "5",
        headline:
          "On Nile Cruiser, 12 Crew Test Positive for Virus, and Egypt Fears Broader Outbreak",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "6 Mar 2020",
        occupation: "The New York Times",
        paragraph:
          "The sudden surge of cases stoked growing fears among a nervous Egyptian public of a much larger number of infections than their government has either detected or declared."
      },

      // VPN: CANADA
      {
        id: "1",
        headline:
          "Coronavirus: Cruise ship on Nile River quarantined over virus cluster",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "7 Mar 2020",
        occupation: "Global News",
        paragraph:
          "A cruise ship on Egypt Nile River with over 150 tourists and local crew was in quarantine Saturday in the southern city of Luxor, as 45 people on board tested positive for the new coronavirus, authorities said."
      },
      {
        id: "2",
        headline:
          "Egypt imposes curfew to slow COVID-19 as virus arrival in Syria raises concerns",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "24 Mar 2020",
        occupation: "Global News",
        paragraph:
          "Egypt will impose a two-week, nightly curfew in the most-populous country in the Arab-world an effort to stop the spread of the new coronavirus, its prime minister announced Tuesday as the International Monetary Fund warned that a shortage of medical supplies could affect poorest nations."
      },
      {
        id: "3",
        headline:
          "Ontario confirms eighth coronavirus case; man had travelled to Egypt",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "2 Mar 2020",
        occupation: "Lethbridge News Now",
        paragraph:
          "Ontario health officials say they have confirmed a new positive case of COVID-19 in Toronto."
      },
      {
        id: "4",
        headline: "Egypt reports 39 new coronavirus cases, 3 deaths",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "26 Mar 2020",
        occupation: "Middle East Monitor",
        paragraph:
          "Egypt on Thursday reported 39 new coronavirus cases and three deaths, the health ministry said in a statement, bringing the total number of infections to 495 including 24 fatalities."
      },
      {
        id: "5",
        headline:
          '"They are All Just Here to Die": Coronavirus Is Threatening Tens of Thousands of Egyptian Political Prisoners',
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "19 Mar 2020",
        occupation: "VICE",
        paragraph:
          "The repressive Sisi government recently implemented a blanket ban on access to prisoners."
      },

      // VPN: BELGIUM
      {
        id: "1",
        headline:
          'Belgians stuck in hotels in Egypt because of corona infection: "We can no longer leave our room"',
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "16 Mar 2020",
        occupation: "Het Laatste Nieuws",
        paragraph:
          "Thierry A. (47) from Blankenberge had a slightly different view of his holiday in Hurghada, a city in Egypt."
      },
      {
        id: "2",
        headline:
          "Corona in the World: Virus is fast-ticking time bomb for Middle East",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "30 Mar 2020",
        occupation: "VRT NWS",
        paragraph:
          "Egypt not ready: 100 million inhabitants, no medical facilities, no tourism income."
      },
      {
        id: "3",
        headline:
          "In Africa there are not (yet) as many infections with the coronavirus, why is that?",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "11 Mar 2020",
        occupation: "VRT NWS",
        paragraph:
          "Egypt tops the list with 67 patients, followed by Algeria with 25 patients and South Africa with 17."
      },
      {
        id: "4",
        headline: "Coronavirus in Egypt fades already fragile tourism",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "10 Mar 2020",
        occupation: "lalibre.de",
        paragraph:
          'Bassam Hamimi, employed in an inn, notices the breathlessness: "we feel their absence", he says in allusion to the Chinese tourists, usually numerous.'
      },
      {
        id: "5",
        headline:
          "Coronavirus: Egypt announces its first death, it is also the first on the African continent",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "8 Mar 2020",
        occupation: "RTBF",
        paragraph:
          "Egypt announced this Sunday the first death linked to the epidemic of the new coronavirus in Hourghada (southeast), the first on the African continent."
      },

      // VPN: DENMARK
      {
        id: "1",
        headline: "Egypt detects second coronavirus case",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "2 Mar 2020",
        occupation: "FRANCE 24",
        paragraph:
          "Egypt on Monday reported its second case of novel coronavirus, more than two weeks after announcing the first confirmed infection in Africa."
      },
      {
        id: "2",
        headline:
          "Egypt registers 12 new coronavirus cases on Nile cruise ship",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "6 Mar 2020",
        occupation: "Arab News",
        paragraph:
          "Egypt detected 12 new cases Friday of the novel coronavirus among workers aboard a Nile cruise boat heading from Aswan to Luxor."
      },
      {
        id: "3",
        headline:
          "In Egypt, Tourists Torn Between Ancient Temples and Coronavirus Tests",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "9 Mar 2020",
        occupation: "The New York Times",
        paragraph: "Egyptian officials insist that it is safe to visit."
      },
      {
        id: "4",
        headline:
          "Egypt Reports 55 Confirmed Coronavirus Cases and First Casualty",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "9 Mar 2020",
        occupation: "Voice of America",
        paragraph:
          "Egypt is reporting its first death from the coronavirus, or COVID-19 — a German tourist."
      },
      {
        id: "5",
        headline: "Egypt bars Qataris over coronavirus fears",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "4 Mar 2020",
        occupation: "Al Jazeera America",
        paragraph:
          "Cairo said it was responding to actions taken by Doha after it imposed a temporary restriction on visitors from Egypt."
      },

      // VPN: FINLAND
      {
        id: "1",
        headline:
          "Experts are puzzled as to why the coronavirus has not just spread in Africa",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "21 Mar 2020",
        occupation: "Helsingin Sanomat",
        paragraph:
          "The coronavirus has spread more slowly in Africa than in the rest of the world."
      },
      {
        id: "2",
        headline:
          'Finns Nile cruise ended in corona quarantine - Eija: "I think a little in advance about the whole trip"',
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "11 Mar 2020",
        occupation: "Ilta Sanomat",
        paragraph:
          "Sixteen Finnish tourists who took part in the Nile cruise were quarantined in the port of Luxor on Monday morning."
      },
      {
        id: "3",
        headline: "There are no respirators in Cairo",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "11 Mar 2020",
        occupation: "Salon Seudun Sanomat",
        paragraph:
          "DAY ARVONEN. At the time of the first coronavirus news, I was on a business trip to Kenya, from where I flew to Cairo."
      },
      {
        id: "4",
        headline: "Why is Korona not spreading in Africa?",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "14 Mar 2020",
        occupation: "verkkouutiset.fi",
        paragraph:
          "Experts are considering the question, and there is no clear answer."
      },
      {
        id: "5",
        headline:
          "Cruise ships have become a hot spot in the fight against the coronavirus",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "7 Mar 2020",
        occupation: "Satakunnan Kansa",
        paragraph:
          "The most recent cases are ongoing in the United States and Egypt."
      },

      // VPN: IRELAND
      {
        id: "1",
        headline: "Egypt imposes nighttime curfew to slow coronavirus",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "24 Mar 2020",
        occupation: "Al Jazeera",
        paragraph:
          "Nationwide two-week curfew from 7pm to 6am will begin on Wednesday."
      },
      {
        id: "2",
        headline: "Egypt reports 39 new coronavirus cases, 3 deaths",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "26 Mar 2020",
        occupation: "MEMO",
        paragraph:
          "Egypt on Thursday reported 39 new coronavirus cases and three deaths, the health ministry said in a statement."
      },
      {
        id: "3",
        headline: "Egypt confirmed coronavirus cases increase to 67",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "11 Mar 2020",
        occupation: "MEMO",
        paragraph:
          "Of the total number, at least 45 cases have been detected on a River Nile cruise ship in the popular tourist destination of Luxor."
      },
      {
        id: "4",
        headline:
          "Egypt forces Guardian journalist to leave after coronavirus story",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "26 Mar 2020",
        occupation: "The Guardian",
        paragraph:
          "Ruth Michaelson had reported on study that questioned country’s official tally of cases."
      },
      {
        id: "5",
        headline: "Egypt: 2 army generals die of coronavirus",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "23 Mar 2020",
        occupation: "Anadolu Agency",
        paragraph:
          "Death toll now 14 with 327 confirmed cases, said Health Ministry earlier on Sunday."
      },

      // VPN: NORWAY
      {
        id: "1",
        headline: "The coronavirus is spreading in Africa",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "10 Mar 2020",
        occupation: "forskning.no",
        paragraph:
          "Egypt is by far the hardest hit country in Africa with 59 confirmed cases."
      },
      {
        id: "2",
        headline:
          "Egypt throws out The Guardian after negative coronary article",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "17 Mar 2020",
        occupation: "Journalisten",
        paragraph: "Claiming the case is full of mistakes."
      },
      {
        id: "3",
        headline: "Egypt imposes nighttime curfew to slow coronavirus",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "24 Mar 2020",
        occupation: "Al Jazeera America",
        paragraph:
          "Nationwide two-week curfew from 7pm to 6am will begin on Wednesday."
      },
      {
        id: "4",
        headline:
          "Egypt confirms 33 new cases of coronavirus on Nile cruise ship",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "7 Mar 2020",
        occupation: "Reuters",
        paragraph:
          "The ship arrived in the southern Egyptian city of Luxor on Thursday from Aswan."
      },
      {
        id: "5",
        headline:
          "Egypt expels Guardian reporter for challenging coronavirus count",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "26 Mar 2020",
        occupation: "Aljazeera.com",
        paragraph:
          "Authorities threatened to shut The Guardian bureau in Cairo if it refused to retract the story and run an apology."
      },

      // VPN: SPAIN
      {
        id: "1",
        headline:
          "The oldest pyramid once again reveals its secrets in Egypt without fear of the coronavirus",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "6 Mar 2020",
        occupation: "ABC.es",
        paragraph:
          "The stepped pyramid of Zoser, in Saqqara, debuts a complete restoration that has lasted 14 years and cost 5.4 million euros."
      },
      {
        id: "2",
        headline:
          "Egypt confirms twelve other new cases of coronavirus on a cruise on the Nile",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "6 Mar 2020",
        occupation: "Europa Press",
        paragraph:
          "The Government of Egypt has confirmed this Friday twelve new cases of new coronaviruses, all of them detected in a cruise on the Nile River."
      },
      {
        id: "3",
        headline: "Egypt fumigates pyramids to fight coronavirus",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "25 Mar 2020",
        occupation: "El Mundo",
        paragraph:
          "Authorities disinfect several archaeological and historical sites while confinement measures are increased in a country with 366 confirmed cases and 19 deaths."
      },
      {
        id: "4",
        headline:
          "Seven pacenses are held in a boat for 12 hours by the coronavirus in Egypt",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "9 Mar 2020",
        occupation: "Hoy Digital",
        paragraph:
          "Five women and two men from Badajoz have remained on board on a cruise ship while Egyptian health officials carried out random tests of the Covid-19 virus."
      },
      {
        id: "5",
        headline: "Egypt closes all mosques and churches due to coronavirus",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "21 Mar 2020",
        occupation: "Europa Press",
        paragraph:
          "The Government of Egypt has announced this Saturday the provisional suspension of all religious acts, including Islamic and Christian, to prevent the spread of the new coronavirus."
      },

      // VPN: UNITED KINGDOM
      {
        id: "1",
        headline: "Egypt declares two-week curfew to counter coronavirus",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "24 Mar 2020",
        occupation: "Reuters UK",
        paragraph:
          "Egypt has declared a curfew from 7 p.m. to 6 a.m. for two weeks from Wednesday to prevent the spread of coronavirus."
      },
      {
        id: "2",
        headline: "Egypt announces 33 new Covid-19 cases on cruise ship",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "7 Mar 2020",
        occupation: "The Guardian",
        paragraph:
          'Prime minister claims "Egypt is safe and the situation is under control," though 45 of the ship’s passengers are now infected.'
      },
      {
        id: "3",
        headline:
          "Egypt disinfects the Pyramids of Giza to halt the spread of coronavirus",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "26 Mar 2020",
        occupation: "Express.co.uk",
        paragraph:
          "The Egyptian authorities have taken it to the next level by cleaning the Pyramids of Giza."
      },
      {
        id: "4",
        headline:
          "Egypt forces Guardian journalist to leave after coronavirus story",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "26 Mar 2020",
        occupation: "The Guardian",
        paragraph:
          "Ruth Michaelson had reported on study that questioned the official tally of cases for the country."
      },
      {
        id: "5",
        headline:
          "Saudi Arabia suspends travel to and from Egypt over coronavirus",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "9 Mar 2020",
        occupation: "Egypt Independent",
        paragraph:
          "Saudi Arabia suspended on Sunday travel of nationals and residents to nine countries, including Egypt."
      },

      // VPN: HONG KONG
      {
        id: "1",
        headline:
          "The number of diagnoses in Egypt has rapidly increased to 59 cases",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "11 Mar 2020",
        occupation: "Hong Kong Economic Times",
        paragraph:
          "The outbreak of Egypt has resulted in 45 people diagnosed with new coronavirus pneumonia (NEC) on Egyptian cruise ship on the Nile River last Monday."
      },
      {
        id: "2",
        headline: "45 confirmed cases of new coronavirus on Egypt Nile Cruises",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "8 Mar 2020",
        occupation: "Metro Radio",
        paragraph:
          "Most of the patients in this new case did not develop symptoms. More than 150 tourists and crew on board were quarantined in Luxor City."
      },
      {
        id: "3",
        headline: "The first death case in Africa is diagnosed in Egypt",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "9 Mar 2020",
        occupation: "Hong Kong 01",
        paragraph:
          "The Egyptian health department said on Sunday (8th) that a German man about 60 years old was diagnosed earlier and later confirmed to be incurable. One death."
      },
      {
        id: "4",
        headline:
          "Diagnosed by the Egyptian Food Ring Group, Tuen Mun couple lives in Zhaoxiyuan",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "11 Mar 2020",
        occupation: "Hong Kong 01",
        paragraph:
          "Cases 119 to 121 involved three 59-year-old group members who participated in a Xinhua Tourism Egypt tour group. The whole group is mainly friends and relatives of FEHD staff, a total of eight people."
      },
      {
        id: "5",
        headline:
          "1 million masks donated by the Egyptian President’s Special Envoy",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "3 Mar 2020",
        occupation: "Hong Kong 01",
        paragraph:
          "Chinese “Global Times” quoted Zaid on March 2 and said, “This is a gift we gave to our friends. Let ’s ride through together.”"
      },

      // VPN: AUSTRALIA
      {
        id: "1",
        headline: "Egypt imposes nighttime curfew to slow coronavirus",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "24 Mar 2020",
        occupation: "Al Jazeera America",
        paragraph:
          "Nationwide two-week curfew from 7pm to 6am will begin on Wednesday."
      },
      {
        id: "2",
        headline:
          "Coronavirus update: Egypt cruise ship quarantined, second UK death, protesters denounce border closures in Cyprus",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "7 Mar 2020",
        occupation: "9News",
        paragraph:
          "A day after coronavirus cases worldwide passed the 100,000 milestone, governments around the world seem still to be evaluating how best to tackle the rapidly spreading COVID-19 strain."
      },
      {
        id: "3",
        headline:
          "Egypt sterilises pyramids in bid to control coronavirus spread",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "26 Mar 2020",
        occupation: "9News",
        paragraph:
          "The Giza Pyramids have been sterilised as part of Egypt disinfection efforts to prevent the spread of coronavirus."
      },
      {
        id: "4",
        headline:
          "Egypt forces Guardian journalist to leave after coronavirus story",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "26 Mar 2020",
        occupation: "The Guardian",
        paragraph:
          "Ruth Michaelson had reported on study that questioned the official tally of cases for the country."
      },
      {
        id: "5",
        headline:
          "In Egypt, Tourists Torn Between Ancient Temples and Coronavirus Tests",
        color: "#FCFEC1",
        city: "Melbourne",
        coordinates: [-33.8688, 151.2093],
        value: 100,
        tags: "",
        code: "AU",
        date: "9 Mar 2020",
        occupation: "The New York Times",
        paragraph:
          "Egyptian officials insist that it is safe to visit. But on Monday, tourists in the ancient city of Luxor were confined to their hotels as doctors tested for the virus."
      },

      // VPN: MEXICO
      {
        id: "1",
        headline: "Egypt puts Nile cruiser in quarantine for coronavirus",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "7 Mar 2020",
        occupation: "San Diego Union-Tribune en Español",
        paragraph:
          "A cruise on the Nile River with more than 150 tourists and local crew on board was quarantined Saturday in the southern Egyptian city of Luxor."
      },
      {
        id: "2",
        headline: "Egypt Cruise Passengers Urged to Guard Against Coronavirus",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "8 Mar 2020",
        occupation: "Telemundo Houston",
        paragraph:
          "Health authorities in the Houston metropolitan area called on people who traveled on a cruise on the Nile River in Egypt between February 12 and March 5 to quarantine the possibility of contagion of the Coronavirus."
      },
      {
        id: "3",
        headline: "American confined in hospital in Egypt by COVID-19",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "12 Mar 2020",
        occupation: "San Diego Union-Tribune en Español",
        paragraph:
          "When Matt Swider was told that he had to be tested for the coronavirus while on a cruise on the Nile River in Egypt, he thought the government was simply taking precautionary measures."
      },
      {
        id: "4",
        headline: "",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "6 Mar 2020",
        occupation: "San Diego Union-Tribune en Español",
        paragraph: ""
      },
      {
        id: "5",
        headline: "Egypt reopens Zoser step pyramid after 14 years",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "13 Mar 2020",
        occupation: "San Diego Union-Tribune en Español",
        paragraph:
          'Egyptian Prime Minister Mustafa Madbuli said this is "a good and appropriate time," despite the coronavirus emergency.'
      }
    ]
  },

  au: {
    markers: [
      // VPN: UNITED STATES
      {
        id: "1",
        headline:
          "Tom Hanks Got Sick in Australia, Where Coronavirus Testing Isn’t Such a Hassle",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "12 Mar 2020",
        occupation: "The New York Times",
        paragraph:
          "In the United States, little if anything about the testing has been efficient or convenient. In Australia, it is free and widely available."
      },
      {
        id: "2",
        headline:
          "Coronavirus in Australia suggests warm summer weather will not stop it",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "13 Mar 2020",
        occupation: "Business Insider",
        paragraph:
          "It is summer in Australia, and the coronavirus is circulating there — evidence that warm weather will not necessarily curtail the outbreak."
      },
      {
        id: "3",
        headline:
          'Tom Hanks & Rita Wilson Test Positive For Coronavirus As Outbreak Hits "Elvis Presley" Film',
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "11 Mar 2020",
        occupation: "Deadline",
        paragraph:
          "We have just received word that Tom Hanks and Rita Wilson have tested positive for the coronavirus."
      },
      {
        id: "4",
        headline:
          'Trump asks Fed for "big cut" after Australia slashes rates on coronavirus impact',
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "3 Mar 2020",
        occupation: "CNBC",
        paragraph:
          "President Donald Trump once again called on the Federal Reserve to deliver some major monetary easing measures, after the Australian central bank cut rates to record lows and noted the impact of the coronavirus outbreak."
      },
      {
        id: "5",
        headline:
          "Canada, Australia pulling out of Olympics because of coronavirus",
        color: "#FCFEC1",
        city: "New York City",
        coordinates: [40.7128, -74.006],
        value: 100,
        tags: "",
        code: "US",
        date: "19 Mar 2020",
        occupation: "NBC News",
        paragraph:
          '"This is not solely about athlete health — this is about public health," the Canadian Olympic Committee said.'
      },

      // VPN: CANADA
      {
        id: "1",
        headline:
          "Tom Hanks and wife Rita Wilson test positive for coronavirus in Australia, actor says on Twitter",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "12 Mar 2020",
        occupation: "National Post",
        paragraph:
          "Oscar-winning actor Tom Hanks and his wife, actress Rita Wilson, have both tested positive for coronavirus in Australia, the actor said on Twitter."
      },
      {
        id: "2",
        headline:
          "F1 driver Daniel Ricciardo cancels appearance over COVID-19 fears",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "11 Mar 2020",
        occupation: "CTV News",
        paragraph:
          "Formula One driver Daniel Ricciardo pulled out of a scheduled Renault team media conference on Wednesday over fears he might be exposed to the coronavirus, while three other team members have been placed in self-isolation."
      },
      {
        id: "3",
        headline:
          "Canada, Australia pulling out of Olympics because of coronavirus",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "22 Mar 2020",
        occupation: "NBC News",
        paragraph:
          '"This is not solely about athlete health — this is about public health," the Canadian Olympic Committee said.'
      },
      {
        id: "4",
        headline:
          "Coronavirus: Australia imposes 14-day self-isolation on international flyers",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "15 Mar 2020",
        occupation: "Global News",
        paragraph:
          "Australia will impose 14-day self-isolation on international travellers arriving from midnight Sunday and ban cruise ships from foreign ports for 30 days, mirroring restrictions in nearby New Zealand."
      },
      {
        id: "5",
        headline:
          "Australia starts lockdown measures as coronavirus cases jump",
        color: "#FCFEC1",
        city: "Toronto",
        coordinates: [43.6532, -79.3832],
        value: 100,
        tags: "",
        code: "CA",
        date: "22 Mar 2020",
        occupation: "National Post",
        paragraph:
          "Australia started shutting down pubs, clubs, gyms and houses of worship on Monday after a jump in coronavirus cases and after thousands disregarded social distancing advice and crowded beaches, bars and restaurants."
      },

      // VPN: BELGIUM
      {
        id: "1",
        headline: "Now also final: Formula 1 Grand Prix of Australia canceled",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "13 Mar 2020",
        occupation: "Het Laatste Nieuws",
        paragraph:
          "The FIA, F1 and the Australian organization have permanently canceled the first race of the 2020 season."
      },
      {
        id: "2",
        headline:
          "Tom Hanks and his wife test positive for coronavirus in Australia",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "12 Mar 2020",
        occupation: "Gazet van Antwerp",
        paragraph:
          "American actor Tom Hanks (63) and his wife, actress Rita Wilson (63), tested positive for Covid-19."
      },
      {
        id: "3",
        headline: '"Big Brother Australia" discontinued due to coronavirus',
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "22 Mar 2020",
        occupation: "Het Laatste Nieuws",
        paragraph:
          "One of the members of the production may have been infected with the corona virus."
      },
      {
        id: "4",
        headline: "Coronavirus: what is the state of affairs for F1?",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "3 Mar 2020",
        occupation: "Gazet van Antwerp",
        paragraph:
          "The situation in Australia, Bahrain and Vietnam can change from one moment to the next."
      },
      {
        id: "5",
        headline:
          "Most popular beach in Australia closes 1 day after a big crowd",
        color: "#FCFEC1",
        city: "Brussels",
        coordinates: [50.8503, 4.3517],
        value: 100,
        tags: "",
        code: "BE",
        date: "21 Mar 2020",
        occupation: "VRT NWS",
        paragraph:
          "Until yesterday many thousands of people went to Bondi Beach in Sydney. The outrage was so great that the city government immediately intervened."
      },

      // VPN: DENMARK
      {
        id: "1",
        headline:
          "Tom Hanks Got Sick in Australia, Where Coronavirus Testing Isn’t Such a Hassle",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "12 Mar 2020",
        occupation: "The New York Times",
        paragraph: "In Australia, it is free and widely available."
      },
      {
        id: "2",
        headline:
          "Australian researchers say immune response to coronavirus mapped",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "17 Mar 2020",
        occupation: "Al Jazeera",
        paragraph:
          "Health minister says the findings are an important step in developing a vaccine and treatment for the virus."
      },
      {
        id: "3",
        headline:
          "Coronavirus: Australia warns millions could become infected as China toll passes 3,000",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "4 Mar 2020",
        occupation: "The Guardian",
        paragraph:
          "Modelling in Australia has predicted a worst-case scenario where millions inside the country could become infected with Covid-19."
      },
      {
        id: "4",
        headline:
          "Vital Signs: Australian and US rate cuts underline seriousness of the coronavirus crisis",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "5 Mar 2020",
        occupation: "The Conversation AU",
        paragraph:
          "This week the Reserve Bank of Australia did something everyone expected and the US Federal Reserve did something almost nobody expected."
      },
      {
        id: "5",
        headline: "Actor Tom Hanks is infected with coronavirus in Australia",
        color: "#FCFEC1",
        city: "Copenhagen",
        coordinates: [55.6761, 12.5683],
        value: 100,
        tags: "",
        code: "DK",
        date: "11 Mar 2020",
        occupation: "Midtjyllands Avis",
        paragraph:
          "Tom Hanks and his wife tested positive for coronavirus during the production of an Elvis movie in Australia."
      },

      // VPN: FINLAND
      {
        id: "1",
        headline:
          "The moral panic caused by the coronavirus is more dangerous than the disease itself",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "7 Mar 2020",
        occupation: "Satakunnan Kansa",
        paragraph:
          "Australian shortage of toilet paper laughs, but there is fear behind it."
      },
      {
        id: "2",
        headline: "Australian Interior Secretary Infected with Coronavirus",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "13 Mar 2020",
        occupation: "Helsingin Sanomat",
        paragraph:
          "The wife of Canadian Prime Minister Justin Trudeau has also been infected with the coronavirus."
      },
      {
        id: "3",
        headline:
          "In Australia, the coronavirus is advancing at a rapid pace, but the pace has slowed",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "29 Mar 2020",
        occupation: "Ilta Sanomat",
        paragraph:
          "In Australia, the rate of spread of the coronavirus has slowed by as much as half, says the country’s prime minister."
      },
      {
        id: "4",
        headline: "Will I return to Australia?",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "13 Mar 2020",
        occupation: "Suomen Kuvalehti",
        paragraph:
          "We are monitoring momentarily quarantines, new infections, death tolls, travel bans and the repercussions of the virus on the global economy."
      },
      {
        id: "5",
        headline:
          "First coronavirus death in Australia as cases rise, Louvre shuts",
        color: "#FCFEC1",
        city: "Helsinki",
        coordinates: [60.1699, 24.9384],
        value: 100,
        tags: "",
        code: "FI",
        date: "2 Mar 2020",
        occupation: "InDaily",
        paragraph:
          "An elderly Perth man has become the first person in Australia to die from the coronavirus."
      },

      // VPN: IRELAND
      {
        id: "1",
        headline:
          "Tom Hanks and wife in hospital after testing positive for coronavirus",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "12 Mar 2020",
        occupation: "RTÉ",
        paragraph:
          "Oscar-winning actor Tom Hanks and his wife Rita Wilson have tested positive for coronavirus while in Australia for a film project."
      },
      {
        id: "2",
        headline:
          "Australian Grand Prix: three F1 team members placed in isolation over coronavirus fears",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "11 Mar 2020",
        occupation: "The Guardian",
        paragraph:
          "Three Formula One team members have been placed into isolation amid concerns they may have contracted the coronavirus."
      },
      {
        id: "3",
        headline: "Australia tells citizens to reconsider all foreign travel",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "13 Mar 2020",
        occupation: "RTÉ",
        paragraph:
          "Australia has warned citizens that coronavirus is now so widespread that they should reconsider all foreign travel."
      },
      {
        id: "4",
        headline:
          "NRL refusing to halt season as Australian coronavirus cases increase",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "22 Mar 2020",
        occupation: "Off The Ball",
        paragraph:
          "The season started last week but matches are being played behind closed doors because of the coronavirus pandemic."
      },
      {
        id: "5",
        headline:
          "Soft, strong and very expensive: Australia shoppers charge fortune for toilet paper amid coronavirus panic",
        color: "#FCFEC1",
        city: "Dublin",
        coordinates: [53.3498, -6.2603],
        value: 100,
        tags: "",
        code: "IE",
        date: "4 Mar 2020",
        occupation: "Extra.ie",
        paragraph:
          "Like death, taxes and Gallagher brothers squabbles, you can guarantee that whenever there’s a crisis, someone will find a way to profit from it."
      },

      // VPN: NORWAY
      {
        id: "1",
        headline:
          "Tom Hanks and his wife in a coronavirus hospital in Australia",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "12 Mar 2020",
        occupation: "Aftenposten",
        paragraph:
          "Tom Hanks and Rita Wilson have tested positive for coronavirus and are observing at a hospital in Australia."
      },
      {
        id: "2",
        headline: "Australian scientists need to test the cure for corona",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "18 Mar 2020",
        occupation: "forskning.no",
        paragraph:
          "Australian researchers say they may have found a cure for the coronavirus and hope to start testing on humans by the end of March."
      },
      {
        id: "3",
        headline:
          "Tom Hanks Got Sick in Australia, Where Coronavirus Testing Isn’t Such a Hassle",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "12 Mar 2020",
        occupation: "The New York Times",
        paragraph: "In Australia, it is free and widely available."
      },
      {
        id: "4",
        headline:
          "Australian Grand Prix: three F1 team members placed in isolation over coronavirus fears",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "11 Mar 2020",
        occupation: "The Guardian",
        paragraph:
          "Three Formula One team members have been placed into isolation amid concerns they may have contracted the coronavirus."
      },
      {
        id: "5",
        headline:
          "Coronavirus: Australia orders all arrivals to self-isolate for 14 days",
        color: "#FCFEC1",
        city: "Oslo",
        coordinates: [59.9139, 10.7522],
        value: 100,
        tags: "",
        code: "NO",
        date: "15 Mar 2020",
        occupation: "BBC News",
        paragraph:
          '"This is very important," Scott Morrison said at a briefing, adding that the measure would take effect from midnight on Sunday (13:00 GMT).'
      },

      // VPN: SPAIN
      {
        id: "1",
        headline: "Tom Hanks and his wife catch coronavirus in Australia",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "12 Mar 2020",
        occupation: "El Periódico",
        paragraph:
          "The actor has reported that he and Rita Wilson both had symptoms and underwent testing for Covid-19 and are now isolated and on treatment."
      },
      {
        id: "2",
        headline:
          "McLaren leaves Australia for team member positive for coronavirus",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "12 Mar 2020",
        occupation: "20minutos",
        paragraph:
          "The McLaren Formula 1 team announced its withdrawal from the 2020 Australian Grand Prix after detecting a team member positive for coronavirus."
      },
      {
        id: "3",
        headline:
          "Coronavirus: Australia discovers how our immune system fights Covid-19",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "17 Mar 2020",
        occupation: "Expansión.com",
        paragraph:
          "A group of Australian scientists has discovered how the immune system fights Covid-19, information that could be of vital importance in the race to find a vaccine against the new coronavirus."
      },
      {
        id: "4",
        headline:
          "Katy Perry, confined to her hotel in Australia for fear of coronavirus",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "13 Mar 2020",
        occupation: "La Vanguardia",
        paragraph:
          "It is the same accommodation where Tom Hanks and his wife Rita Wilson have been, both positive in the Covid-19 test."
      },
      {
        id: "5",
        headline: "Australia records first death from COVID-19",
        color: "#FCFEC1",
        city: "Madrid",
        coordinates: [40.4168, -3.7038],
        value: 100,
        tags: "",
        code: "ES",
        date: "1 Mar 2020",
        occupation: "La Vanguardia",
        paragraph:
          "The deceased was one of 164 Australians evacuated last week from the quarantined cruise ship in Japan."
      },

      // VPN: UNITED KINGDOM
      {
        id: "1",
        headline:
          "No certainty yet over Australian GP as new coronavirus travel measures introduced",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "5 Mar 2020",
        occupation: "The Guardian",
        paragraph:
          "Enhanced screening measures for visitors travelling from Italy to Australia, rather than an outright travel ban, have been introduced."
      },
      {
        id: "2",
        headline:
          "Tom Hanks and wife Rita Wilson test positive for coronavirus in Australia",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "12 Mar 2020",
        occupation: "The Guardian",
        paragraph:
          "American actor, who is starring in Baz Luhrmann Elvis film, and his wife say they are to be isolated while they recover."
      },
      {
        id: "3",
        headline:
          "Coronavirus: Australia to close pubs, cafes and places of worship",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "22 Mar 2020",
        occupation: "BBC News",
        paragraph:
          "Australia is shutting down non-essential services as coronavirus cases rise rapidly in the country."
      },
      {
        id: "4",
        headline:
          "Australian lockdown measures have HALVED the rate of coronavirus infections in the past week",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "29 Mar 2020",
        occupation: "Daily Mail",
        paragraph:
          "Half as many Australians are catching coronavirus as a week ago with the borders, pubs, and restaurants shut, Scott Morrison claims."
      },
      {
        id: "5",
        headline:
          "Australia advises against all international travel for the first time in history",
        color: "#FCFEC1",
        city: "London",
        coordinates: [51.5074, -0.1278],
        value: 100,
        tags: "",
        code: "UK",
        date: "17 Mar 2020",
        occupation: "Daily Mail",
        paragraph:
          "The Prime Minister has advised against all overseas travel and banned gatherings of more than 100 people as the country battles the coronavirus outbreak."
      },

      // VPN: HONG KONG
      {
        id: "1",
        headline:
          "Studies in Australia and Brazil also point to mutations in new coronavirus",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "5 Mar 2020",
        occupation: "Headline Daily",
        paragraph:
          "The Australian National Science Institute said it analyzed 115 published genome sequences and believed that they were mutating, understanding the impact of virus changes."
      },
      {
        id: "2",
        headline: "If Tom Hanks is not in Australia ...",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "13 Mar 2020",
        occupation: "New York Times Chinese Network",
        paragraph:
          "In the United States, these symptoms may not be sufficient for the detection of new coronaviruses. But he and his equally uncomfortable wife, Rita Wilson, are not in the United States—they are in Australia."
      },
      {
        id: "3",
        headline:
          "Timeline: How does the Australian government respond to the outbreak?",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "18 Mar 2020",
        occupation: "ABC Chinese",
        paragraph:
          "Australia found the first confirmed case of a new coronavirus. The patient flew from Melbourne to Melbourne a few days ago. Three confirmed cases were found in Sydney that day."
      },
      {
        id: "4",
        headline:
          "March 15: From midnight today, all overseas travelers arriving in Australia must be quarantined for 14 days",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "15 Mar 2020",
        occupation: "ABC Chinese",
        paragraph:
          "Australian Prime Minister Morrison held a press conference and announced that starting at midnight on March 16, all passengers arriving in Australia from overseas must undergo 14 days of self-isolation."
      },
      {
        id: "5",
        headline:
          "More than 90 diagnosed 3 dead F1 Melbourne Station: Unintentional closed door race",
        color: "#FCFEC1",
        city: "Hong Kong",
        coordinates: [22.3193, 114.1694],
        value: 100,
        tags: "",
        code: "HK",
        date: "9 Mar 2020",
        occupation: "Hong Kong Economic Times",
        paragraph:
          "The Australian epidemic continued, with a total of 91 people infected with the new coronavirus pneumonia (NEC) and 3 people died."
      },

      /*
      // VPN: AUSTRALIA
      {
        id: '1',
        headline: '',
        color: 'red',
        city: 'Melbourne',
        coordinates: [37.8136, -114.9631],
        value: 100,
        tags: '',
        code: 'AU',
        date: '11 Mar 2020',
        occupation: '',
        paragraph: '',
      },
      {
        id: '2',
        headline: '',
        color: 'red',
        city: 'Melbourne',
        coordinates: [37.8136, -114.9631],
        value: 100,
        tags: '',
        code: 'AU',
        date: '11 Mar 2020',
        occupation: '',
        paragraph: '',
      },
      {
        id: '3',
        headline: '',
        color: 'red',
        city: 'Melbourne',
        coordinates: [37.8136, -114.9631],
        value: 100,
        tags: '',
        code: 'AU',
        date: '11 Mar 2020',
        occupation: '',
        paragraph: '',
      },
      {
        id: '4',
        headline: '',
        color: 'red',
        city: 'Melbourne',
        coordinates: [37.8136, -114.9631],
        value: 100,
        tags: '',
        code: 'AU',
        date: '11 Mar 2020',
        occupation: '',
        paragraph: '',
      },
      {
        id: '5',
        headline: '',
        color: 'red',
        city: 'Melbourne',
        coordinates: [37.8136, -114.9631],
        value: 100,
        tags: '',
        code: 'AU',
        date: '11 Mar 2020',
        occupation: '',
        paragraph: '',
      },
      */

      // VPN: MEXICO
      {
        id: "1",
        headline: "Australian GP finally canceled due to coronavirus",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "12 Mar 2020",
        occupation: "San Diego Union-Tribune en Español",
        paragraph:
          "Organizers of Formula One canceled the first date of the season, the Australian Grand Prix, hours before the start of the initial practice session."
      },
      {
        id: "2",
        headline: "Australia reduces its interest rate to 0.5% for coronavirus",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "2 Mar 2020",
        occupation: "San Diego Union-Tribune en Español",
        paragraph:
          "Australian central bank on Tuesday cut its benchmark interest rate by a quarter of a percentage point to 0.5%, its all-time low."
      },
      {
        id: "3",
        headline:
          "Tom Hanks and his wife announce that they have caught the coronavirus",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "12 Mar 2020",
        occupation: "EL PAÍS",
        paragraph:
          "The actor explains on Instagram that he is in isolated Australia after testing positive."
      },
      {
        id: "4",
        headline:
          "Tom Hanks Got Sick in Australia, Where Coronavirus Testing Isn’t Such a Hassle",
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "12 Mar 2020",
        occupation: "The New York Times",
        paragraph: "In Australia, it is free and widely available."
      },
      {
        id: "5",
        headline:
          'Trump asks Fed for "big cut" after Australia slashes rates on coronavirus impact',
        color: "#FCFEC1",
        city: "Mexico City",
        coordinates: [19.4326, -99.1332],
        value: 100,
        tags: "",
        code: "MX",
        date: "3 Mar 2020",
        occupation: "CNBC",
        paragraph:
          "President Donald Trump once again called on the Federal Reserve to deliver some major monetary easing measures, after the Australian central bank cut rates to record lows."
      }
    ]
  }
};

export { AllMarkersByCountry };
