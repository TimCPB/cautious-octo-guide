def get_sum(a,b)
    if a < b
      p (a..b).to_a
			(a..b).to_a.sum
		elsif a > b
			p [*b..a]
			[*b..a].sum
		else
			a
		end
end