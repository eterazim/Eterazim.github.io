import random
import time
import cgitb cgitb.enable()
start_response('200 OK', [('Content-Type', 'text/html')])
while true:
  number = str(random.randrange(1, 11))

  if "1" in number:
    print("What happens when a creeper walks into a bar?")
    time.sleep(3)
    print("Everyone dies.")
  if "2" in number:
    print("Why do players shop at Endermen yard sales?")
    time.sleep(3)
    print("To get their stuff back.")
  if "3" in number:
    print("Do zombies eat popcorn with their fingers?")
    time.sleep(3)
    print("No, they eat their fingers separately.")
  if "4" in number:
    print("What did the pig say to the creeper?")
    time.sleep(3)
    print("Nothing. The creeper blew up the pig.")
  if "5" in number:
    print("How do zombies and skeletons keep from burning during the day?")
    time.sleep(3)
    print("They stand on soul sand.")
  if "6" in number:
    print("Alex: \"What do you call a polar bear in Minecraft?\"")
    time.sleep(1.5)
    print("Steve: \"I don't know. What?\"")
    time.sleep(2)
    print("Alex:\"Lost, because there are no polar bears in Minecraft!\"")
  if "7" in number:
    print("What happened when it became so cold in the icy biome?")
    time.sleep(3)
    print("The snow golems were holding up pictures of thumbs!")
if "8" in number:
  print("What happened when it became so cold in the icy biome?")
  time.sleep(3)
  print("The snow golems were holding up pictures of thumbs!")
  if "9" in number:
    print("First player: \"I heard the End has its own soundtrack.\"")
    time.sleep(1.5)
    print("Second player: \"What does it sound like?\"")
    time.sleep(2)
    print("First player: \"You can only hear it in the End.\"")
  if "10" in number:
    print("You might be a Minecraft addict if you forget to give your mom a present for her birthday and instead get her a Minecraft account XD.")
  if "11" in number:
    print("How does Steve detect if someone is raiding his marijuana stash?")
    time.sleep(3)
    print("He uses a BUD switch.")