const [darkMode, setDarkMode] = useState(false);
const toggle_off =
  'https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/96/null/external-toggle-off-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png';
const toggle_on = 'https://img.icons8.com/ios-glyphs/90/null/toggle-on--v1.png';
<TouchableOpacity
  onPress={() => {
    setDarkMode(!darkMode);
  }}
  style={styles.MessageButtonContainer}>
  <Image
    style={styles.DarkModeButtonImage}
    source={{
      uri: darkMode ? toggle_on : toggle_off,
    }}
  />
</TouchableOpacity>;
