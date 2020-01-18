A game of Lucky Sevens is implemented by the related files according to the following set of guidelines:

  // 1. As long as there is money, play the game.
  // 2. Each round, the program rolls a virtual pair of dice for the user.
  //     * If the sum of the 2 dice is equal to 7, the player wins $4.
  //     * Otherwise, the player loses $1.

Please note that the computational portion of the code emulating random behavior was validated against the expected probability distribution for the sum of two six-sided dice. As the number of trials (i.e. dice rolls) increased, the more closely the results approached expected values at infinite trials. Validation may be seen in the file "Probability Distribution for Sum of Two Six-Sided: Actual (Code Implemented) vs Expected (Ideal)" at URL https://github.com/mattygersh21/Dev10Repo/tree/master/lucky-sevens.