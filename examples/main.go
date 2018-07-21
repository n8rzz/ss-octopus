package main

import (
	"fmt"
	"log"
	"os"
	"os/exec"
	"strings"

	"github.com/abiosoft/ishell"
	"github.com/fatih/color"
)

// gitBranch is a representation of a single git branch
type gitBranch struct {
	rawname  string
	isActive bool
}

// gitBranchCollection is a Collection object of `gitBranch` instances
type gitBranchCollection struct {
	items []gitBranch
}

// AddItem `gitBranch` instance to collection
func (gbc *gitBranchCollection) AddItem(gitBranch gitBranch) {
	gbc.items = append(gbc.items, gitBranch)
}

// RawnameList produces an array of `gitBranch#rawname` values
func (gbc *gitBranchCollection) RawnameList() []string {
	var rl []string

	for i := range gbc.items {
		branch := gbc.items[i]

		if !branch.isActive {
			rl = append(rl, branch.rawname)
		}
	}

	return rl
}

var (
	collection gitBranchCollection
	selection  []string
)

func main() {
	shell := ishell.New()

	shell.AddCmd(&ishell.Cmd{
		Name: "selectBranches",
		Help: "",
		Func: func(c *ishell.Context) {
			branches := collection.RawnameList()
			choices := c.Checklist(branches,
				"Which branches would you like to remove ?",
				nil)

			for _, v := range choices {
				selection = append(selection, branches[v])
			}

			shouldDelete := verifyRemoval(c, selection)

			if !shouldDelete {
				os.Exit(0)
			}

			processBranchRemovals(selection)
		},
	})

	// run shell
	shell.Process("selectBranches")
}

func verifyRemoval(c *ishell.Context, selection []string) bool {
	yellowWriter := color.New(color.FgYellow).PrintfFunc()

	if len(selection) == 0 {
		yellowWriter("\nNo branches selected, exiting...\n")
		os.Exit(1)
	}

	c.Println("Do you really want to remove:")
	yellowWriter("\n%v\n", strings.Join(selection, ", "))
	c.Print("\n(Y/n): ")

	response := strings.ToLower(c.ReadLine())

	return response == "yes" || response == "y" || response == ""
}

func processBranchRemovals(selection []string) {
	redWriter := color.New(color.FgRed).PrintfFunc()
	fmt.Println("\nRemoving branch(s): ")

	for i := range selection {
		branch := selection[i]

		redWriter("%v\n", branch)

		_, err := exec.Command("git", "branch", "-D", branch).Output()

		if err != nil {
			log.Fatalf("cmd.Output() failed with %s\n", err)
		}
	}
}

func init() {
	run()
}

func run() {
	branchList := readLocalGitBranchList()

	hydrateBranchCollection(branchList)
}

func readLocalGitBranchList() []string {
	out, err := exec.Command("git", "branch").Output()

	if err != nil {
		log.Fatalf("cmd.Output() failed with %s\n", err)
	}

	str := string(out)
	trimmedStr := strings.TrimRight(str, "\n")
	localGitBranchList := strings.Split(trimmedStr, "\n")

	return localGitBranchList
}

func hydrateBranchCollection(branchList []string) {
	for i := range branchList {
		s := strings.TrimLeft(branchList[i], " ")
		isActive := strings.Contains(s, "*")
		gb := gitBranch{s, isActive}

		collection.AddItem(gb)
	}
}
